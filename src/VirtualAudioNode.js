import { EVENTS } from './constants'

class VirtualAudioNode {
  constructor (id, ctx) {
    this._ = {
      id,
      ctx
    }
  }

  connect (destination/*, outputIndex, inputIndex */) {
    // TODO: destination can be AudioNode or AudioParam
    if (typeof destination === 'object' && destination._.id) {
      this._.ctx._.events.add(EVENTS.CONNECT, destination._.id, this._.id, this._.ctx.currentTime)
    } else if (destination === this._.ctx.destination) {
      this._.ctx._.events.add(EVENTS.CONNECT, destination, this._.id, this._.ctx.currentTime)
    }
  }
  disconnect (/* destination, output, input */) {
    // TODO: destination can be AudioNode or AudioParam
  }
}

export default VirtualAudioNode
