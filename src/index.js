import VirtualAudioContext from './VirtualAudioContext'
import { invertEvent, applyEventToContext, optimize } from './helpers'
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

  return optimize(concat(removed, added))
}

const patch = (eventsData, ctx) => {
  const now = ctx.currentTime

  compose(
    forEach(applyEventToContext(__, ctx)),
    map(evolve({
      time: add(now)
    }))
  )(eventsData)
}

const render = (virtualCtx, ctx) => {
  patch(optimize(virtualCtx._.events.data), ctx)
}

export {
  VirtualAudioContext,
  diff,
  patch,
  render,
  optimize
}
