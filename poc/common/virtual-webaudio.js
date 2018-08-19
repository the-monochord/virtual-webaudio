/* global R */

const {
  compose,
  reject,
  map,
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
  REMOVE: 'REMOVE',
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
        },
        get value () {
          return 440
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
        },
        get value () {
          return 1
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
          break
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
  if (!ctx._nodes) {
    ctx._nodes = {}
  }
  ctx._nodes[id] = node
}

const removeNodeById = (id, ctx) => {
  delete ctx._nodes[id]
}

const applyEventToContext = curry(({ targetId, eventName, param, time }, ctx) => {
  console.log(targetId, eventName, param, time)
  // TODO: how to deal with time?

  switch (eventName) {
    case EVENTS.CREATE:
      switch (param) {
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
      break
    case EVENTS.UPDATE: {
      const node = getNodeById(targetId, ctx)
      const [key, value] = toPairs(param)[0]
      node[key].value = value
    }
      break
    case EVENTS.CONNECT: {
      const node = getNodeById(targetId, ctx)
      const target = param === CTX_DESTINATION ? ctx.destination : getNodeById(param, ctx)

      node.connect(target)
    }
      break
    case EVENTS.CALL: {
      const node = getNodeById(targetId, ctx)

      switch (param) {
        case 'start':
          node.start()
          break
        case 'stop':
          node.stop()
          break
        default: {
          console.error('unknown command', param)
        }
      }
    }
      break
    case EVENTS.REMOVE:
      removeNodeById(targetId, ctx)
      break
    case EVENTS.DISCONNECT: {
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

/*
export {
  CTX_DESTINATION,
  EVENTS,
  UniqueIdGenerator,
  Events,
  VirtualAudioContext,
  invertEvent,
  getNodeById,
  setNodeById,
  applyEventToContext,
  diff,
  patch,
  render
}
*/
