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
  __,
  reverse
} from 'ramda'

// -------------

const diff = (virtualCtxA, virtualCtxB) => {
  const a = virtualCtxA._.events.data
  const b = virtualCtxB._.events.data

  const removed = compose(
    reverse,
    reject(propEq('eventName', EVENTS.NOP)),
    map(invertEvent),
    without
  )(b, a)

  const added = without(a, b)

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
