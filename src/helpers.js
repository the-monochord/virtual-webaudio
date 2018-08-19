import {
  curry,
  toPairs
} from 'ramda'

import { CTX_DESTINATION, EVENTS } from './constants'

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

export {
  invertEvent,
  getNodeById,
  setNodeById,
  removeNodeById,
  applyEventToContext
}
