/* global virtualWebaudio, AudioContext, once */

const { VirtualAudioContext, patch, render, diff } = virtualWebaudio

const chords = [
  [430.05, 538.71],
  [430.05, 538.71, 616.67, 772.46],
  [411.11, 492.29, 563.53, 616.67],
  [393, 492.29, 563.53, 616.67],
  [299.92, 359.14, 470.6, 538.71],
  [299.92, 359.14, 492.29, 563.53],
  [313.74, 375.69, 492.29, 616.67]
]

const addNote = (osc, gain) => (frequency, t) => {
  osc.frequency.setValueAtTime(frequency, t)
  /*
  gain.gain.cancelAndHoldAtTime(t)
  gain.gain.linearRampToValueAtTime(0.5, t + 0.05)
  gain.gain.exponentialRampToValueAtTime(0.1, t + 1)
  gain.gain.linearRampToValueAtTime(0, t + 1.5)
  */
}

const createVoice = (ctx) => {
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.type = 'triangle'
  gain.gain.value = 0
  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start()

  return addNote(osc, gain)
}

const sound = frequencies => {
  const ctx = new VirtualAudioContext()

  const voices = [
    // createVoice(ctx),
    // createVoice(ctx),
    // createVoice(ctx),
    createVoice(ctx)
  ]

  frequencies[0] && voices[0](frequencies[0], ctx.currentTime)
  // frequencies[1] && voices[1](frequencies[1], ctx.currentTime)
  // frequencies[2] && voices[2](frequencies[2], ctx.currentTime)
  // frequencies[3] && voices[3](frequencies[3], ctx.currentTime)

  return ctx
}

let old = null

const change = (virtualCtx, ctx) => {
  if (old === null) {
    render(virtualCtx, ctx)
  } else {
    patch(diff(old, virtualCtx), ctx)
  }

  old = virtualCtx
}

const vCtx1 = sound(chords[0])
const vCtx2 = sound(chords[1])

console.log(vCtx1._.events.data)
console.log(vCtx2._.events.data)
console.log(diff(vCtx1, vCtx2))

/*
const playDemo = () => {
  const ctx = new AudioContext()

  chords.map((chord, index) => {
    setTimeout(() => change(sound(chord), ctx), index * 1000)
  })
}

document.getElementById('play').addEventListener('click', once(playDemo))
*/
