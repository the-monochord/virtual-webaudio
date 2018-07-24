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

class VirtualAudioContext{
  constructor() {
    this.destination = null
    this.patch = {}
  }
  createOscillator() {
    return {
      frequency: {
        value: 440
      },
      connect: target => {

      },
      start: () => {

      }
    }
  }
  createGain() {
    return {
      gain: {
        value: 1
      },
      connect: target => {

      }
    }
  }
}

const diff = (virtualCtxA, virtualCtxB) => {
  const patchA = virtualCtxA.patch
  const patchB = virtualCtxB.patch
}
const patch = (patch, ctx) => {

}
const render = (virtualCtx, ctx) => {
  patch(virtualCtx.patch, ctx)
}

// -------------

const create = () => {
  const ctx = new VirtualAudioContext()

  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.frequency.value = 200

  gain.gain.value = 0.5

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start()

  return ctx
}

const modify = () => {
  const ctx = new VirtualAudioContext()

  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.frequency.value = 200

  gain.gain.value = 0 // this is the line, that changed

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start()

  return ctx
}

const a = create()
const b = modify()
const ctx = new AudioContext()

render(a, ctx)
setTimeout(() => {
  patch(diff(a, b), ctx) // should turn off the gain's volume
}, 1000)
