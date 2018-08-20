import { EVENTS } from './constants'

class VirtualPeriodicWave {
  constructor (id, ctx, ...args) {
    this._ = {
      id,
      ctx
    }

    this._.events.add(EVENTS.CREATE, 'periodicWave', id, this.currentTime, args)
  }
}

export default VirtualPeriodicWave
