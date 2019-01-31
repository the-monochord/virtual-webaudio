/* global virtualWebaudio, AudioContext, throttle */

const { VirtualAudioContext, render } = virtualWebaudio

const attackAndDecay = () => {
  const ctx = new VirtualAudioContext()

  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.frequency.value = 400

  gain.gain.setValueAtTime(0, ctx.currentTime)
  gain.gain.linearRampToValueAtTime(1, ctx.currentTime + 1)

  gain.gain.setValueAtTime(1, ctx.currentTime + 2)
  gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 3)

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start()

  return ctx
}

const ctx = new AudioContext()
const note = attackAndDecay()

const demo = () => {
  render(note, ctx)
}

document.getElementsByTagName('button')[0].addEventListener('click', throttle(demo, 3000))
