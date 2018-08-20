import { EVENTS } from './constants'
import VirtualAudioParam from './VirtualAudioParam'

class VirtualAudioNode {
  constructor (id, ctx) {
    this._ = {
      id,
      ctx
    }
  }

  connect (destination/*, outputIndex, inputIndex */) {
    if (destination instanceof VirtualAudioNode) {
      this._.ctx._.events.add(EVENTS.CONNECT, destination._.id, this._.id, this._.ctx.currentTime)
    } else if (destination instanceof VirtualAudioParam) {
      this._.ctx._.events.add(EVENTS.CONNECT, destination._.nodeId, this._.id, this._.ctx.currentTime, [destination._.name])
    } else if (destination === this._.ctx.destination) {
      this._.ctx._.events.add(EVENTS.CONNECT, destination, this._.id, this._.ctx.currentTime)
    }
  }
  disconnect (destination = null/*, output, input */) {
    if (destination === null) {
      this._.ctx._.events.add(EVENTS.DISCONNECT, null, this._.id, this._.ctx.currentTime)
    } else if (destination instanceof VirtualAudioNode) {
      this._.ctx._.events.add(EVENTS.DISCONNECT, destination._.id, this._.id, this._.ctx.currentTime)
    } else if (destination instanceof VirtualAudioParam) {
      this._.ctx._.events.add(EVENTS.DISCONNECT, destination._.nodeId, this._.id, this._.ctx.currentTime, [destination._.name])
    } else if (destination === this._.ctx.destination) {
      this._.ctx._.events.add(EVENTS.DISCONNECT, destination, this._.id, this._.ctx.currentTime)
    }
  }
}

export default VirtualAudioNode
