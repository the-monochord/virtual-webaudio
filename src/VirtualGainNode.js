import VirtualAudioNode from './VirtualAudioNode'
import VirtualAudioParam from './VirtualAudioParam'

import { EVENTS } from './constants'

class VirtualGainNode extends VirtualAudioNode {
  constructor (id, ctx) {
    super(id, ctx)

    this.gain = new VirtualAudioParam(id, ctx, 'gain', 1)

    ctx._.events.add(EVENTS.CREATE, 'gain', id, ctx.currentTime)
  }
}

export default VirtualGainNode
