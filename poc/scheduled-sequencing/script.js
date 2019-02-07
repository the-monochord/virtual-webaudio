/* global virtualWebaudio, AudioContext, once */

const { VirtualAudioContext, render } = virtualWebaudio

const notes = [100, 200, 300, 400, 500, 600, 700, 800]

const addNote = (osc, gain) => (frequency, t) => {
  osc.frequency.setValueAtTime(frequency, t)
  gain.gain.cancelAndHoldAtTime(t)
  gain.gain.linearRampToValueAtTime(1, t + 0.05)
  gain.gain.exponentialRampToValueAtTime(0.1, t + 1)
  gain.gain.linearRampToValueAtTime(0, t + 1.5)
}

const create = () => {
  const ctx = new VirtualAudioContext()

  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  const boundAddNote = addNote(osc, gain)

  osc.type = 'triangle'

  gain.gain.value = 0

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start()

  notes.forEach((note, index) => boundAddNote(note, index / 2))

  return ctx
}

const a = create()

const demo = () => {
  const ctx = new AudioContext()

  render(a, ctx)
}

document.getElementsByTagName('button')[0].addEventListener('click', once(demo))
