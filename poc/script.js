/*
the goal of this poc is to be able to
  create oscillator nodes with frequency values
  create gain nodes with gain values
  connect them to each other
  connect them up to the audio context's destination

  have a way to internally represent these nodes
  be able to diff 2 internal representations
  be able to create patch tasks to update the live version of the nodes with as little modification as possible

we need an internal vocabulary of all the used nodes and the context
  multiple contexts?
*/

const virtualContext = {}

const refs = {
  oscillators: {},
  gains: {},
  context: null
}

// -------------

// creating the audio app

const ctx = new AudioContext()

const osc = ctx.createOscillator()
const gain = ctx.createGain()

osc.frequency.value = 200

gain.gain.value = 0.5

osc.connect(gain)
gain.connect(ctx.destination)

osc.start()

// modifying the app:

setTimeout(() => {
  gain.gain.value = 0
}, 1000)

// the modification should be configured this way:

/*
setTimeout(() => {
  const ctx = new AudioContext()

  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.frequency.value = 200

  gain.gain.value = 0 // note the difference

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start()
}, 1000)
*/
