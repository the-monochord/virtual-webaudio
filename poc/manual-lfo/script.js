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

let old = null

const change = (virtualCtx, ctx) => {
  if (old === null) {
    render(virtualCtx, ctx)
  } else {
    patch(diff(old, virtualCtx), ctx)
  }

  old = virtualCtx
}

let ctx
let masterVolume = 0
let lfoDirection = '+'
let inited = false
let running = false

const demo = () => {
  if (!ctx) {
    ctx = new AudioContext()
  }

  if (!inited) {
    inited = true
    setInterval(() => {
      if (running) {
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
      } else {
        masterVolume = 0
      }

      change(sound(440, masterVolume), ctx)
    }, 30)

    change(sound(440, masterVolume), ctx)
  }

  running = !running
}

document.getElementsByTagName('button')[0].addEventListener('click', demo)
