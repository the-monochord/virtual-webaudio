import { CTX_DESTINATION } from './constants'
import UniqueIdGenerator from './UniqueIdGenerator'
import Events from './Events'

import VirtualOscillatorNode from './VirtualOscillatorNode'
import VirtualGainNode from './VirtualGainNode'
import VirtualPeriodicWave from './VirtualPeriodicWave'
import VirtualDelayNode from './VirtualDelayNode'

class VirtualAudioContext {
  constructor () {
    this._ = {
      uniqueIdGenerator: new UniqueIdGenerator(0),
      events: new Events(),
      initialTime: Date.now(),
      unitOfTimeInSeconds: 0.02
    }
  }
  get currentTime () {
    const { initialTime, unitOfTimeInSeconds } = this._
    const realTimeInSeconds = (Date.now() - initialTime) / 1000
    const throttle = unitOfTimeInSeconds * 1000
    return Math.round(realTimeInSeconds * throttle) / throttle
  }
  get destination () {
    return CTX_DESTINATION
  }
  /*
  get listener
  get sampleRate
  get state

  createAnalyser()
  createBiquadFilter()
  createBuffer()
  createBufferSource()
  createChannelMerger()
  createChannelSplitter()
  createConstantSource()
  createConvolver()
  */
  createDelay (maxDelayTime = 1) {
    const id = this._.uniqueIdGenerator.generate()
    return new VirtualDelayNode(id, this, maxDelayTime)
  }
  /*
  createDynamicsCompressor()
  */
  createGain () {
    const id = this._.uniqueIdGenerator.generate()
    return new VirtualGainNode(id, this)
  }
  /*
  createIIRFilter()
  */
  createOscillator () {
    const id = this._.uniqueIdGenerator.generate()
    return new VirtualOscillatorNode(id, this)
  }
  /*
  createPanner()
  */
  createPeriodicWave (real, imag/*, constraints */) {
    const id = this._.uniqueIdGenerator.generate()
    return new VirtualPeriodicWave(id, this, real, imag)
  }
  /*
  createScriptProcessor()
  createStereoPanner()
  createWaveShaper()
  decodeAudioData()
  resume()
  */
}

export default VirtualAudioContext
