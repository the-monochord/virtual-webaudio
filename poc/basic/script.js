/* global virtualWebaudio, AudioContext, throttle */

const { VirtualAudioContext, patch, render, diff } = virtualWebaudio

const create = () => {
  const ctx = new VirtualAudioContext()

  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.frequency.value = 300

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

  osc.frequency.value = 300

  gain.gain.value = 0 // this is the line, that changed

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start()

  return ctx
}

let ctx
const a = create()
const b = modify()

const demo = () => {
  if (!ctx) {
    ctx = new AudioContext()
  }

  render(a, ctx)

  setTimeout(() => {
    // turn off gain volume after a second
    patch(diff(a, b), ctx)
  }, 1000)
}

document.getElementsByTagName('button')[0].addEventListener('click', throttle(demo, 1000))
