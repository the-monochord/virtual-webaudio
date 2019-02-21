/* global virtualWebaudio, AudioContext, once */

const { VirtualAudioContext, render, patch, diff } = virtualWebaudio

const voices = 4

const addNote = ([osc, gain]) => (frequency, t) => {
  osc.frequency.setValueAtTime(frequency, t)
  gain.gain.cancelAndHoldAtTime(t)
  gain.gain.linearRampToValueAtTime(0.8 / voices, t + 0.05)
  gain.gain.exponentialRampToValueAtTime(0.1, t + 1.5)
  gain.gain.linearRampToValueAtTime(0, t + 2)
}

const addVoice = ctx => {
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.type = 'sawtooth'

  gain.gain.value = 0

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start()

  return [osc, gain]
}

const trigger = (frequency, voiceIndex) => {
  const ctx = new VirtualAudioContext()

  const boundVoices = []

  for (let i = 0; i < voices; i++) {
    boundVoices[i] = addNote(addVoice(ctx))
  }

  ctx.__disableDiff()
  boundVoices[voiceIndex](frequency, ctx.currentTime)
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

// https://soundcloud.com/lajos-gyorgy-meszaros/unfinished-ambient-trumpet-wendy-carlos-alpha-scale
const chords = [
  [430.05, 538.71, null, null],
  [430.05, 538.71, 616.67, 772.46],
  [411.11, 492.29, 563.53, 616.67],
  [393, 492.29, 563.53, 616.67],
  [299.92, 359.14, 470.6, 538.71],
  [299.92, 359.14, 492.29, 563.53],
  [313.74, 375.69, 492.29, 616.67]
]

const playDemo = () => {
  const ctx = new AudioContext()

  chords.forEach((chord, chordIndex) => {
    setTimeout(() => {
      chord.forEach((note, noteIndex) => {
        if (note !== null) {
          change(trigger(note, noteIndex), ctx)
        }
      })
    }, 1000 * chordIndex)
  })
}

document.getElementById('play').addEventListener('click', once(playDemo))
