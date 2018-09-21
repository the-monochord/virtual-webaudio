import { EVENTS } from './constants'

class VirtualPeriodicWave {
  constructor (id, ctx, ...args) {
    this._ = {
      id,
      ctx
    }

    ctx._.events.add(EVENTS.CREATE, 'periodicWave', id, ctx.currentTime, args)
  }
}

export default VirtualPeriodicWave
