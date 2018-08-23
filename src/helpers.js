import {
  curry,
  toPairs,
  cond,
  propEq,
  assoc,
  T,
  apply
} from 'ramda'

import { CTX_DESTINATION, EVENTS } from './constants'

const invertEvent = cond([
  [propEq('eventName', EVENTS.CREATE), assoc('eventName', EVENTS.REMOVE)],
  [propEq('eventName', EVENTS.UPDATE), assoc('eventName', EVENTS.NOP)],
  [propEq('eventName', EVENTS.CONNECT), assoc('eventName', EVENTS.DISCONNECT)],
  [propEq('eventName', EVENTS.DISCONNECT), assoc('eventName', EVENTS.CONNECT)],
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
  console.log(targetId, eventName, param, time, args)
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
      const [key, value] = toPairs(args[0])[0]

      node[key].value = value
    }
      break
    case EVENTS.CONNECT: {
      const node = getNodeById(targetId, ctx)

      if (param === CTX_DESTINATION) {
        node.connect(ctx.destination)
      } else {
        const target = getNodeById(param, ctx)

        if (args.length === 0) {
          node.connect(target)
        } else {
          const property = target[args[0]]

          node.connect(property)
        }
      }
    }
      break
    case EVENTS.CALL: {
      const node = getNodeById(targetId, ctx)

      switch (param) {
        case 'start':
        case 'stop':
        case 'setPeriodicWave':
          apply(node[param].bind(node), args)
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

      if (param === null) {
        node.disconnect()
      } else if (param === CTX_DESTINATION) {
        node.disconnect(ctx.destination)
      } else {
        const target = getNodeById(param, ctx)

        if (args.length === 0) {
          node.disconnect(target)
        } else {
          const property = target[args[0]]

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
