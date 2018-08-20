import VirtualAudioContext from './VirtualAudioContext'
import { invertEvent, applyEventToContext } from './helpers'
import { EVENTS } from './constants'

import {
  compose,
  reject,
  map,
  add,
  evolve,
  forEach,
  without,
  propEq,
  concat,
  __
} from 'ramda'

// -------------

const diff = (virtualCtxA, virtualCtxB) => {
  const a = map(JSON.stringify, virtualCtxA._.events.data)
  const b = map(JSON.stringify, virtualCtxB._.events.data)

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
  patch(virtualCtx._.events.data, ctx)
}

export {
  VirtualAudioContext,
  diff,
  patch,
  render
}
