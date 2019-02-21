/* global virtualWebaudio, AudioContext, once */

const { VirtualAudioContext, render, patch, diff } = virtualWebaudio

const addNote = (osc, gain) => (frequency, t) => {
  osc.frequency.setValueAtTime(frequency, t)
  gain.gain.cancelAndHoldAtTime(t)
  gain.gain.linearRampToValueAtTime(1, t + 0.05)
  gain.gain.exponentialRampToValueAtTime(0.1, t + 1)
  gain.gain.linearRampToValueAtTime(0, t + 1.5)
}

const trigger = (frequency, voiceIndex) => {
  const ctx = new VirtualAudioContext()

  // -----------------

  const osc1 = ctx.createOscillator()
  const gain1 = ctx.createGain()

  osc1.frequency.linearRampToValueAtTime(frequency, ctx.currentTime + 0.01)
  osc1.type = 'triangle'

  gain1.gain.value = 0

  osc1.connect(gain1)
  gain1.connect(ctx.destination)

  osc1.start()

  const boundVoice1 = addNote(osc1, gain1)

  // -----------------

  const osc2 = ctx.createOscillator()
  const gain2 = ctx.createGain()

  osc2.frequency.linearRampToValueAtTime(frequency, ctx.currentTime + 0.01)
  osc2.type = 'sine'

  gain2.gain.value = 0

  osc2.connect(gain2)
  gain2.connect(ctx.destination)

  osc2.start()

  const boundVoice2 = addNote(osc2, gain2)

  // -----------------

  ctx.__disableDiff()
  console.log(voiceIndex)
  if (voiceIndex === 1) {
    boundVoice1(frequency, ctx.currentTime)
  } else {
    boundVoice2(frequency, ctx.currentTime)
  }
  ctx.__enableDiff()

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
    setTimeout(() => change(trigger(note, index % 2 + 1), ctx), 500 * index)
  })
}

document.getElementById('play').addEventListener('click', once(playDemo))
