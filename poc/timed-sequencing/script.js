/* global virtualWebaudio, AudioContext, once */

const { VirtualAudioContext, render, patch, diff } = virtualWebaudio

const addNote = (osc, gain) => (frequency, t) => {
  osc.frequency.setValueAtTime(frequency, t)
  gain.gain.cancelAndHoldAtTime(t)
  gain.gain.linearRampToValueAtTime(1, t + 0.05)
  gain.gain.exponentialRampToValueAtTime(0.1, t + 1)
  gain.gain.linearRampToValueAtTime(0, t + 1.5)
}

const trigger = frequency => {
  const ctx = new VirtualAudioContext()

  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.frequency.linearRampToValueAtTime(frequency, ctx.currentTime + 0.01)
  osc.type = 'triangle'

  gain.gain.value = 0

  osc.connect(gain)
  gain.connect(ctx.destination)

  ctx.__disableDiff()
  addNote(osc, gain)(frequency, ctx.currentTime)
  ctx.__enableDiff()

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

const notes = [100, 200, 300, 400, 500, 600, 700, 800]

const playDemo = () => {
  const ctx = new AudioContext()

  notes.forEach((note, index) => {
    setTimeout(() => change(trigger(note), ctx), 500 * index)
  })
}

document.getElementById('play').addEventListener('click', once(playDemo))
