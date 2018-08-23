/* global virtualWebaudio, AudioContext */

const { VirtualAudioContext, patch, render, diff } = virtualWebaudio

const sound = (frequency, volume) => {
  const ctx = new VirtualAudioContext()

  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.frequency.value = frequency

  gain.gain.value = volume

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start()

  return ctx
}

const ctx = new AudioContext()

let old = null

const change = (virtualCtx, ctx) => {
  if (old === null) {
    render(virtualCtx, ctx)
  } else {
    patch(diff(old, virtualCtx), ctx)
  }

  old = virtualCtx
}

let masterVolume = 1
let lfoDirection = '+'

setInterval(() => {
  if (lfoDirection === '+') {
    masterVolume += 0.03
    if (masterVolume > 0.9) {
      lfoDirection = '-'
    }
  } else {
    masterVolume -= 0.03
    if (masterVolume < 0.1) {
      lfoDirection = '+'
    }
  }

  change(sound(440, masterVolume), ctx)
}, 30)

change(sound(440, masterVolume), ctx)
