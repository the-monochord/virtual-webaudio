import { EVENTS } from './constants'
import { markTimeArg } from './helpers'
import { adjust } from 'ramda'

class VirtualAudioParam {
  constructor (nodeId, ctx, name, defaultValue) {
    this._ = {
      nodeId,
      ctx,
      name,
      defaultValue
    }
  }
  get value () {
    return this._.defaultValue
  }
  set value (newValue) {
    this._.ctx._.events.add(EVENTS.UPDATE, this._.name, this._.nodeId, this._.ctx.currentTime, [newValue])
  }

  setValueAtTime (...args) {
    this._.ctx._.events.add(EVENTS.CALL, [this._.name, 'setValueAtTime'], this._.nodeId, this._.ctx.currentTime, adjust(markTimeArg, 1, args))
  }
  linearRampToValueAtTime (...args) {
    this._.ctx._.events.add(EVENTS.CALL, [this._.name, 'linearRampToValueAtTime'], this._.nodeId, this._.ctx.currentTime, args)
  }
  exponentialRampToValueAtTime (...args) {
    this._.ctx._.events.add(EVENTS.CALL, [this._.name, 'exponentialRampToValueAtTime'], this._.nodeId, this._.ctx.currentTime, args)
  }
  setTargetAtTime (...args) {
    this._.ctx._.events.add(EVENTS.CALL, [this._.name, 'setTargetAtTime'], this._.nodeId, this._.ctx.currentTime, args)
  }
  setValueCurveAtTime (...args) {
    this._.ctx._.events.add(EVENTS.CALL, [this._.name, 'setValueCurveAtTime'], this._.nodeId, this._.ctx.currentTime, args)
  }
  cancelScheduledValues (...args) {
    this._.ctx._.events.add(EVENTS.CALL, [this._.name, 'cancelScheduledValues'], this._.nodeId, this._.ctx.currentTime, args)
  }
  cancelAndHoldAtTime (...args) {
    this._.ctx._.events.add(EVENTS.CALL, [this._.name, 'cancelAndHoldAtTime'], this._.nodeId, this._.ctx.currentTime, args)
  }
}

export default VirtualAudioParam
