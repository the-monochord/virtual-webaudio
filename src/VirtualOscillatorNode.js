import VirtualAudioNode from './VirtualAudioNode'
import VirtualAudioParam from './VirtualAudioParam'

import { EVENTS } from './constants'

class VirtualOscillatorNode extends VirtualAudioNode {
  constructor (id, ctx) {
    super(id, ctx)

    this._.type = 'sine'

    this.frequency = new VirtualAudioParam(id, ctx, 'frequency', 440)
    this.detune = new VirtualAudioParam(id, ctx, 'detune', 0)

    ctx._.events.add(EVENTS.CREATE, 'oscillator', id, ctx.currentTime)
  }

  get type () {
    return this._.type
  }

  set type (newValue) {
    this._.type = newValue
    this._.ctx._.events.add(EVENTS.SET, 'type', this._.id, this._.ctx.currentTime, [newValue])
  }

  start (...args) {
    this._.ctx._.events.add(EVENTS.CALL, ['start'], this._.id, this._.ctx.currentTime, args)
  }
  stop (...args) {
    this._.ctx._.events.add(EVENTS.CALL, ['stop'], this._.id, this._.ctx.currentTime, args)
  }
  setPeriodicWave (...args) {
    this._.ctx._.events.add(EVENTS.CALL, ['setPeriodicWave'], this._.id, this._.ctx.currentTime, args)
  }
}

export default VirtualOscillatorNode
