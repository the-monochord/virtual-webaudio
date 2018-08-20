import { CTX_DESTINATION } from './constants'
import UniqueIdGenerator from './UniqueIdGenerator'
import Events from './Events'

import VirtualOscillatorNode from './VirtualOscillatorNode'
import VirtualGainNode from './VirtualGainNode'
import VirtualPeriodicWave from './VirtualPeriodicWave'

class VirtualAudioContext {
  constructor () {
    this._ = {
      uniqueIdGenerator: new UniqueIdGenerator(0),
      events: new Events(),
      initialTime: Date.now()
    }
  }
  get currentTime () {
    return Math.floor((Date.now() - this._.initialTime) / 10) * 10 // manual 10ms throttle
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
  createDelay()
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
