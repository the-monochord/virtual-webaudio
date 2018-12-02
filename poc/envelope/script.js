/* global virtualWebaudio, AudioContext */

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

const note = attackAndDecay()
const ctx = new AudioContext()

render(note, ctx)
