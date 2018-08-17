/*
the goal of this poc is to be able to
  create oscillator nodes with frequency values
  create gain nodes with gain values
  connect them to each other
  connect them up to the audio context's destination

  have a way to internally represent these nodes
  be able to diff 2 internal representations
  be able to create patch tasks to update the live version of the nodes with as little modification as possible

we need an internal vocabulary of all the used nodes and the context
  multiple contexts?
*/

const {
  compose,
  reject,
  equals,
  fromPairs,
  map,
  sort,
  subtract,
  apply,
  union,
  keys,
  prop,
  prepend,
  of,
  eqProps,
  pluck,
  add,
  evolve,
  forEach,
  without,
  propEq,
  concat,
  curry,
  __,
  toPairs
} = R

const CTX_DESTINATION = 'ctx.destination'

const EVENTS = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  CONNECT: 'CONNECT',
  CALL: 'CALL',
  REMOVE: 'REMOVE', // how to implement this? the code would have something like "delete osc;" and not have a function call to hook onto
  NOP: 'NOP',
  DISCONNECT: 'DISCONNECT'
}

class UniqueIdGenerator {
  constructor (seed = 0) {
    this.value = seed
  }
  generate () {
    return '#' + ++this.value
  }
}

class Events {
  constructor () {
    this.data = []
  }
  add (eventName, param, targetId, time) {
    this.data.push({
      targetId,
      eventName,
      param,
      time
    })
  }
}

class VirtualAudioContext {
  constructor () {
    this.uniqueIdGenerator = new UniqueIdGenerator(0)
    this.destination = CTX_DESTINATION
    this.events = new Events()
    this.initialTime = Date.now()
  }
  get currentTime () {
    return Math.floor((Date.now() - this.initialTime) / 10) * 10 // manual 10ms throttle
  }
  createOscillator () {
    const id = this.uniqueIdGenerator.generate()
    const events = this.events
    // https://stackoverflow.com/a/4823030/1806628
    const getCurrentTime = Object.getOwnPropertyDescriptor(VirtualAudioContext.prototype, 'currentTime').get.bind(this)

    events.add(EVENTS.CREATE, 'oscillator', id, getCurrentTime())

    return {
      get id () {
        return id
      },
      frequency: {
        set value (newValue) {
          events.add(EVENTS.UPDATE, {frequency: newValue}, id, getCurrentTime())
        }
      },
      connect: target => {
        if (typeof target === 'object' && target.id) {
          events.add(EVENTS.CONNECT, target.id, id, getCurrentTime())
        } else if (target === CTX_DESTINATION) {
          events.add(EVENTS.CONNECT, target, id, getCurrentTime())
        }
      },
      start: () => {
        events.add(EVENTS.CALL, 'start', id, getCurrentTime())
      }
    }
  }
  createGain () {
    const id = this.uniqueIdGenerator.generate()
    const events = this.events
    // https://stackoverflow.com/a/4823030/1806628
    const getCurrentTime = Object.getOwnPropertyDescriptor(VirtualAudioContext.prototype, 'currentTime').get.bind(this)

    events.add(EVENTS.CREATE, 'gain', id, getCurrentTime())

    return {
      get id () {
        return id
      },
      gain: {
        set value (newValue) {
          events.add(EVENTS.UPDATE, {gain: newValue}, id, getCurrentTime())
        }
      },
      connect: target => {
        if (typeof target === 'object' && target.id) {
          events.add(EVENTS.CONNECT, target.id, id, getCurrentTime())
        } else if (target === CTX_DESTINATION) {
          events.add(EVENTS.CONNECT, target, id, getCurrentTime())
        }
      }
    }
  }
}

// -------------

const invertEvent = ({ targetId, eventName, param, time }) => {
  const eventData = {
    targetId,
    eventName,
    param,
    time
  }

  switch (eventName) {
    case EVENTS.CREATE:
      eventData.eventName = EVENTS.REMOVE
      break
    case EVENTS.UPDATE:
      eventData.eventName = EVENTS.NOP
      break
    case EVENTS.CONNECT:
      eventData.eventName = EVENTS.DISCONNECT
      break
    case EVENTS.CALL:
      switch (param) {
        case 'start':
          eventData.param = 'stop'
        break
        case 'stop':
          eventData.param = 'start'
        default:
          console.error('unknown command', param)
      }
      break
    default:
      console.error('unknown event', eventName)
      break
  }
  
  return eventData
}

const getNodeById = (id, ctx) => {
  return ctx._nodes[id]
}

const setNodeById = (id, node, ctx) => {
  if(!ctx._nodes){
    ctx._nodes = {}
  }
  ctx._nodes[id] = node
}

const applyEventToContext = curry(({ targetId, eventName, param, time }, ctx) => {
  console.log(targetId, eventName, param, time)
  // TODO: how to deal with time?

  switch (eventName) {
    case EVENTS.CREATE: {
      switch(param){
        case 'oscillator': {
          const node = ctx.createOscillator()
          setNodeById(targetId, node, ctx)
        }
          break
        case 'gain': {
          const node = ctx.createGain()
          setNodeById(targetId, node, ctx)
        }
          break
        default: {
          console.error('unknown node type', param)
        }
      }
    }
      break
    case EVENTS.UPDATE: {
      const node = getNodeById(targetId, ctx)
      const [key, value] = toPairs(param)[0]
      node[key].value = value
    }
      break
    case EVENTS.CONNECT:{
      const node = getNodeById(targetId, ctx)
      const target = param === CTX_DESTINATION ? ctx.destination : getNodeById(param, ctx)

      node.connect(target)
    }
      break
    case EVENTS.CALL: {
      const node = getNodeById(targetId, ctx)

      switch(param){
        case 'start': {
          node.start()
        }
        break
        case 'stop': {
          node.stop()
        }
        break
        default: {
          console.error('unknown command', param)
        }
      }
    }
      break
    case EVENTS.REMOVE:{
      // TODO
    }
      break
    case DISCONNECT: {
      const node = getNodeById(targetId, ctx)
      const target = param === CTX_DESTINATION ? ctx.destination : getNodeById(param, ctx)

      node.disconnect(target)
    }
      break
    default: {
      console.error('unknown event', eventName)
    }
  }
})

const diff = (virtualCtxA, virtualCtxB) => {
  const a = map(JSON.stringify, virtualCtxA.events.data)
  const b = map(JSON.stringify, virtualCtxB.events.data)

  const removed = compose(
    reject(propEq('eventName', EVENTS.NOP)),
    map(compose(
      invertEvent,
      JSON.parse
    )),
    without
  )(b, a)

  const added = map(JSON.parse, without(a, b))

  return concat(removed, added)
}

const patch = (eventsData, ctx) => {
  const now = Date.now()

  compose(
    forEach(applyEventToContext(__, ctx)),
    // TODO: SORT BY targetId, time DESC
    map(evolve({
      time: add(now)
    }))
  )(eventsData)
}

const render = (virtualCtx, ctx) => {
  patch(virtualCtx.events.data, ctx)
}

// -------------

/*
const create = () => {
  const ctx = new VirtualAudioContext()

  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.frequency.value = 200

  gain.gain.value = 0.5

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start()

  return ctx
}

const modify = () => {
  const ctx = new VirtualAudioContext()

  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.frequency.value = 200

  gain.gain.value = 0 // this is the line, that changed

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start()

  return ctx
}

const a = create()
const b = modify()
const ctx = new AudioContext()

render(a, ctx)
setTimeout(() => {
  console.log('a second later:')
  patch(diff(a, b), ctx) // should turn off the gain's volume
}, 1000)
*/

const sound = (frequency, volume) => {
  const ctx = new VirtualAudioContext()

  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.frequency.value = frequency

  gain.gain.value = volume

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start()

  return ctx
}

const frequencies = [
  261.6,
  277.1,
  293.6,
  311.1,
  329.6,
  349.2,
  369.9,
  391.9,
  415.3,
  440,
  466.1,
  493.8,
  523.2
]
const keyMap = {
  A: 0,
  W: 1,
  S: 2,
  E: 3,
  D: 4,
  F: 5,
  T: 6,
  G: 7,
  Z: 8,
  Y: 8,
  H: 9,
  U: 10,
  J: 11,
  K: 12
}

const ctx = new AudioContext()

let old = null

const change = (virtualCtx, ctx) => {
  if (old === null) {
    render(virtualCtx, ctx)
  } else {
    patch(diff(old, virtualCtx), ctx)
  }

  old = virtualCtx
}

let lastPressedNoteIndex = null
let isNotePlaying = false
let masterVolume = 1
const keyPressed = {
  A: false,
  W: false,
  S: false,
  E: false,
  D: false,
  F: false,
  T: false,
  G: false,
  Z: false,
  Y: false,
  H: false,
  U: false,
  J: false,
  K: false
}

document.body.addEventListener('keydown', e => {
  const pressedChar = String.fromCharCode(e.keyCode)
  if (!keyPressed[pressedChar]) {
    keyPressed[pressedChar] = true

    if (keyMap.hasOwnProperty(pressedChar)) {
      if (lastPressedNoteIndex !== keyMap[pressedChar] || !isNotePlaying) {
        lastPressedNoteIndex = keyMap[pressedChar]
        isNotePlaying = true

        change(sound(frequencies[lastPressedNoteIndex], masterVolume), ctx)
      }
    }
  }
})

document.body.addEventListener('keyup', e => {
  const pressedChar = String.fromCharCode(e.keyCode)
  if (keyPressed[pressedChar]) {
    keyPressed[pressedChar] = false

    if (keyMap.hasOwnProperty(pressedChar)) {
      if (lastPressedNoteIndex === keyMap[pressedChar] && isNotePlaying) {
        lastPressedNoteIndex = keyMap[pressedChar]
        isNotePlaying = false
        change(sound(frequencies[lastPressedNoteIndex], 0), ctx)
      }
    }
  }
})

let lfoDirection = 1
setInterval(() => {
  if (lfoDirection === 1) {
    masterVolume += 0.1
    if (masterVolume > 0.9) {
      lfoDirection = -1
    }
  } else {
    masterVolume -= 0.1
    if (masterVolume < 0.1) {
      lfoDirection = 1
    }
  }
  if (isNotePlaying) {
    change(sound(frequencies[lastPressedNoteIndex], masterVolume), ctx)
  }
}, 50)
