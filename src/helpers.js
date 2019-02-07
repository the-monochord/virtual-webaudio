import {
  curry,
  cond,
  propEq,
  assoc,
  T,
  apply,
  length,
  compose,
  equals,
  last,
  prop,
  evolve,
  update,
  contains,
  __,
  startsWith,
  is,
  both,
  add,
  replace,
  when,
  map,
  lt,
  always
} from 'ramda'

import { CTX_DESTINATION, EVENTS } from './constants'
import VirtualPeriodicWave from './VirtualPeriodicWave'

const invertEvent = cond([
  [propEq('eventName', EVENTS.CREATE), assoc('eventName', EVENTS.REMOVE)],
  [propEq('eventName', EVENTS.UPDATE), assoc('eventName', EVENTS.NOP)],
  [propEq('eventName', EVENTS.CONNECT), assoc('eventName', EVENTS.DISCONNECT)],
  [propEq('eventName', EVENTS.DISCONNECT), assoc('eventName', EVENTS.CONNECT)],
  [propEq('eventName', EVENTS.SET), assoc('eventName', EVENTS.NOP)],
  [propEq('eventName', EVENTS.CALL), cond([
    [compose(equals('start'), last, prop('param')), evolve({ param: update(-1, 'stop') })],
    [compose(equals('stop'), last, prop('param')), evolve({ param: update(-1, 'start') })],
    [compose(contains(__, [
      'setPeriodicWave',
      'cancelScheduledValues',
      'cancelAndHoldAtTime'
    ]), last, prop('param')), assoc('eventName', EVENTS.NOP)],
    [compose(contains(__, [
      'setValueAtTime',
      'linearRampToValueAtTime',
      'exponentialRampToValueAtTime',
      'setTargetAtTime',
      'setValueCurveAtTime'
    ]), last, prop('param')), evolve({
      param: update(-1, 'cancelAndHoldAtTime'),
      args: () => [markTimeArg(-1)]
    })],
    [T, ({ param }) => {
      console.error(`inverting: unknown command ${param}`)
    }]
  ])],
  [T, ({ eventName }) => {
    console.error(`inverting: unknown event ${eventName}`)
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

const TIME_MARK = '{{currentTime}}'

const markTimeArg = arg => TIME_MARK + ' + ' + arg

const parseTimeArg = curry((time, arg) => when(
  both(is(String), startsWith(TIME_MARK + ' + ')),
  compose(
    when(lt(__, 0), always(0)),
    add(time),
    parseFloat,
    replace(TIME_MARK + ' + ', '')
  )
)(arg))

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
          const node = apply(ctx.createPeriodicWave.bind(ctx), args)
          setNodeById(targetId, node, ctx)
        }
          break
        case 'delay': {
          const node = apply(ctx.createDelay.bind(ctx), args)
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
          const [command] = param

          switch (command) {
            case 'start':
            case 'stop':
              apply(node[command].bind(node), args)
              break
            case 'setPeriodicWave':
              if (args[0] instanceof VirtualPeriodicWave) {
                const nodeId = args[0]._.id // args[0] is a VirtualPeriodicWave, but we need the real one
                const argNode = getNodeById(nodeId, ctx)
                node[command](argNode)
              } else {
                node[command](args[0])
              }
              break
            default: {
              console.error('unknown command', command)
            }
          }
        }
          break
        case 2: {
          const [paramName, command] = param

          switch (command) {
            case 'setValueAtTime':
            case 'linearRampToValueAtTime':
            case 'exponentialRampToValueAtTime':
            case 'setTargetAtTime':
            case 'setValueCurveAtTime':
            case 'cancelScheduledValues':
            case 'cancelAndHoldAtTime':
              apply(node[paramName][command].bind(node[paramName]), map(parseTimeArg(time), args))
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
  markTimeArg,
  parseTimeArg,
  applyEventToContext
}
