import { CTX_DESTINATION, EVENTS } from './constants'
import UniqueIdGenerator from './UniqueIdGenerator'
import Events from './Events'

class VirtualAudioContext {
  constructor () {
    this.uniqueIdGenerator = new UniqueIdGenerator(0)
    this.destination = CTX_DESTINATION
    this.events = new Events()
    this.initialTime = Date.now()
  }
  get currentTime () {
    return Math.floor((Date.now() - this.initialTime) / 10) * 10 // manual 10ms throttle
  }
  createOscillator () {
    const id = this.uniqueIdGenerator.generate()
    const events = this.events
    // https://stackoverflow.com/a/4823030/1806628
    const getCurrentTime = Object.getOwnPropertyDescriptor(VirtualAudioContext.prototype, 'currentTime').get.bind(this)

    events.add(EVENTS.CREATE, 'oscillator', id, getCurrentTime())

    return {
      get id () {
        return id
      },
      frequency: {
        set value (newValue) {
          events.add(EVENTS.UPDATE, null, id, getCurrentTime(), [{frequency: newValue}])
        },
        get value () {
          return 440
        }
      },
      connect: target => {
        if (typeof target === 'object' && target.id) {
          events.add(EVENTS.CONNECT, target.id, id, getCurrentTime())
        } else if (target === CTX_DESTINATION) {
          events.add(EVENTS.CONNECT, target, id, getCurrentTime())
        }
      },
      start: (...args) => {
        events.add(EVENTS.CALL, 'start', id, getCurrentTime(), args)
      },
      stop: (...args) => {
        events.add(EVENTS.CALL, 'stop', id, getCurrentTime(), args)
      },
      setPeriodicWave: (...args) => {
        events.add(EVENTS.CALL, 'setPeriodicWave', id, getCurrentTime(), args)
      }
    }
  }
  createGain () {
    const id = this.uniqueIdGenerator.generate()
    const events = this.events
    // https://stackoverflow.com/a/4823030/1806628
    const getCurrentTime = Object.getOwnPropertyDescriptor(VirtualAudioContext.prototype, 'currentTime').get.bind(this)

    events.add(EVENTS.CREATE, 'gain', id, getCurrentTime())

    return {
      get id () {
        return id
      },
      gain: {
        set value (newValue) {
          events.add(EVENTS.UPDATE, null, id, getCurrentTime(), [{gain: newValue}])
        },
        get value () {
          return 1
        }
      },
      connect: target => {
        if (typeof target === 'object' && target.id) {
          events.add(EVENTS.CONNECT, target.id, id, getCurrentTime())
        } else if (target === CTX_DESTINATION) {
          events.add(EVENTS.CONNECT, target, id, getCurrentTime())
        }
      }
    }
  }
  createPeriodicWave (...args) {
    const id = this.uniqueIdGenerator.generate()
    const events = this.events
    // https://stackoverflow.com/a/4823030/1806628
    const getCurrentTime = Object.getOwnPropertyDescriptor(VirtualAudioContext.prototype, 'currentTime').get.bind(this)

    events.add(EVENTS.CREATE, 'periodicWave', id, getCurrentTime(), args)

    return {
      get id () {
        return id
      }
    }
  }
}

export default VirtualAudioContext
