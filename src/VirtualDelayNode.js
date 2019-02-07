import VirtualAudioNode from './VirtualAudioNode'
import VirtualAudioParam from './VirtualAudioParam'

import { EVENTS } from './constants'

class VirtualDelayNode extends VirtualAudioNode {
  constructor (id, ctx, ...args) {
    super(id, ctx)

    // TODO: add validation
    //  * maxDelayTime is an integer between 0 and 180, default 1
    //  * delayTime is an integer between 0 and maxDelayTime, default 0

    const [ maxDelayTime ] = args
    this._.maxDelayTime = maxDelayTime
    this.delayTime = new VirtualAudioParam(id, ctx, 'delayTime', 0)

    ctx._.events.add(EVENTS.CREATE, 'delay', id, ctx.currentTime, args)
  }
}

export default VirtualDelayNode
