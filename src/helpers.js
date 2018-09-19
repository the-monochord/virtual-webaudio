import {
  curry,
  cond,
  propEq,
  assoc,
  T,
  apply,
  length
} from 'ramda'

import { CTX_DESTINATION, EVENTS } from './constants'

const invertEvent = cond([
  [propEq('eventName', EVENTS.CREATE), assoc('eventName', EVENTS.REMOVE)],
  [propEq('eventName', EVENTS.UPDATE), assoc('eventName', EVENTS.NOP)],
  [propEq('eventName', EVENTS.CONNECT), assoc('eventName', EVENTS.DISCONNECT)],
  [propEq('eventName', EVENTS.DISCONNECT), assoc('eventName', EVENTS.CONNECT)],
  [propEq('eventName', EVENTS.SET), assoc('eventName', EVENTS.NOP)],
  [propEq('eventName', EVENTS.CALL), cond([
    [propEq('param', 'start'), assoc('param', 'stop')],
    [propEq('param', 'stop'), assoc('param', 'start')],
    [propEq('param', 'setPeriodicWave'), assoc('eventName', EVENTS.NOP)],
    [T, ({ param }) => {
      console.error(`unknown command ${param}`)
    }]
  ])],
  [T, ({ eventName }) => {
    console.error(`unknown event ${eventName}`)
  }]
])

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

const applyEventToContext = curry(({ targetId, eventName, param, time, args }, ctx) => {
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
        case 'periodicWave': {
          const node = apply(ctx.createPeriodicWave, args)
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
      node[param].value = args[0]
    }
      break
    case EVENTS.SET: {
      const node = getNodeById(targetId, ctx)
      node[param] = args[0]
    }
      break
    case EVENTS.CONNECT: {
      const node = getNodeById(targetId, ctx)

      switch (param.length) {
        case 1: {
          const target = param[0] === CTX_DESTINATION ? ctx.destination : getNodeById(param[0], ctx)
          node.connect(target)
        }
          break
        case 2: {
          const target = getNodeById(param[0], ctx)
          const property = target[param[1]]
          node.connect(property)
        }
      }
    }
      break
    case EVENTS.CALL: {
      const node = getNodeById(targetId, ctx)

      switch (length(param)) {
        case 1: {
          const [ command ] = param

          switch (command) {
            case 'start':
            case 'stop':
            case 'setPeriodicWave':
              apply(node[command].bind(node), args)
              break
            default: {
              console.error('unknown command', command)
            }
          }
        }
          break
        case 2: {
          const [ paramName, command ] = param

          switch (command) {
            case 'setValueAtTime':
            case 'linearRampToValueAtTime':
            case 'exponentialRampToValueAtTime':
            case 'setTargetAtTime':
            case 'setValueCurveAtTime':
            case 'cancelScheduledValues':
            case 'cancelAndHoldAtTime':
              apply(node[paramName][command].bind(node[paramName]), args)
              break
            default: {
              console.error('unknown command', command)
            }
          }
        }
          break
      }
    }
      break
    case EVENTS.REMOVE:
      removeNodeById(targetId, ctx)
      break
    case EVENTS.DISCONNECT: {
      const node = getNodeById(targetId, ctx)

      switch (param.length) {
        case 0:
          node.disconnect()
          break
        case 1: {
          const target = param[0] === CTX_DESTINATION ? ctx.destination : getNodeById(param[0], ctx)
          node.disconnect(target)
        }
          break
        case 2: {
          const target = getNodeById(param[0], ctx)
          const property = target[param[1]]
          node.disconnect(property)
        }
      }
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
