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

// TODO: VirtualAudioContext should only hold a single object of patches, which is the create
// render() should wrap the patch into a {create: ..., modify: {}, delete: {}} format
// diff() should expect only to get create datas from patches, should output {create: ..., modify: ..., delete: ...}

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
  mergeDeepRight
} = R

const CTX_DESTINATION = 'ctx.destination'

const EVENTS = {
  NOOP: 'NOP',
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  CONNECT_TO: 'CONNECT TO',
  CALL: 'CALL'
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
          events.add(EVENTS.CONNECT_TO, target.id, id, getCurrentTime())
        } else if (target === CTX_DESTINATION) {
          events.add(EVENTS.CONNECT_TO, target, id, getCurrentTime())
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
          events.add(EVENTS.CONNECT_TO, target.id, id, getCurrentTime())
        } else if (target === CTX_DESTINATION) {
          events.add(EVENTS.CONNECT_TO, target, id, getCurrentTime())
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

  // switch () {}
  
  return eventData
}

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

  return mergeDeepRight(added, removed)
}

const patch = (eventsData, ctx) => {
  const now = Date.now()

  compose(
    forEach(({ targetId, eventName, param, time }) => {
      // console.log(targetId, eventName, param, time)
    }),
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
  patch(diff(a, b), ctx) // should turn off the gain's volume
}, 1000)

/*
console.log(a.events.data)
console.log(b.events.data)
*/
