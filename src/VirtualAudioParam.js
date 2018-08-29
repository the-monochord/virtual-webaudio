import { EVENTS } from './constants'

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

  /*
  setValueAtTime () {

  }
  linearRampToValueAtTime () {

  }
  exponentialRampToValueAtTime () {

  }
  setTargetAtTime () {

  }
  setValueCurveAtTime () {

  }
  cancelScheduledValues () {

  }
  cancelAndHoldAtTime () {

  }
  */
}

export default VirtualAudioParam
