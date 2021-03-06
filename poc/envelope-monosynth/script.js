/* global virtualWebaudio, AudioContext */

const { VirtualAudioContext, patch, render, diff } = virtualWebaudio

const sound = (frequency, volume, delayInSeconds) => {
  const ctx = new VirtualAudioContext()

  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.frequency.linearRampToValueAtTime(frequency, ctx.currentTime + 0.01)
  osc.type = 'triangle'

  gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + delayInSeconds)

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start()

  return ctx
}

const frequencies = [
  261.6,
  277.1,
  293.6,
  311.1,
  329.6,
  349.2,
  369.9,
  391.9,
  415.3,
  440,
  466.1,
  493.8,
  523.2
]
const keyMap = {
  A: 0,
  W: 1,
  S: 2,
  E: 3,
  D: 4,
  F: 5,
  T: 6,
  G: 7,
  Z: 8,
  Y: 8,
  H: 9,
  U: 10,
  J: 11,
  K: 12
}

let ctx
let old = null

const change = (virtualCtx, ctx) => {
  if (old === null) {
    render(virtualCtx, ctx)
  } else {
    patch(diff(old, virtualCtx), ctx)
  }

  old = virtualCtx
}

let lastPressedNoteIndex = null
let isNotePlaying = false
const keyPressed = {
  A: false,
  W: false,
  S: false,
  E: false,
  D: false,
  F: false,
  T: false,
  G: false,
  Z: false,
  Y: false,
  H: false,
  U: false,
  J: false,
  K: false
}

document.body.addEventListener('keydown', e => {
  if (!ctx) {
    ctx = new AudioContext()
    // setting initial volume to 0
    change(sound(0, 0, 0), ctx)
  }
  const pressedChar = String.fromCharCode(e.keyCode)
  if (!keyPressed[pressedChar]) {
    keyPressed[pressedChar] = true

    if (keyMap.hasOwnProperty(pressedChar)) {
      if (lastPressedNoteIndex !== keyMap[pressedChar] || !isNotePlaying) {
        lastPressedNoteIndex = keyMap[pressedChar]
        isNotePlaying = true
        change(sound(frequencies[lastPressedNoteIndex], 1, 1), ctx)
      }
    }
  }
})

document.body.addEventListener('keyup', e => {
  const pressedChar = String.fromCharCode(e.keyCode)
  if (keyPressed[pressedChar]) {
    keyPressed[pressedChar] = false

    if (keyMap.hasOwnProperty(pressedChar)) {
      if (lastPressedNoteIndex === keyMap[pressedChar] && isNotePlaying) {
        lastPressedNoteIndex = keyMap[pressedChar]
        isNotePlaying = false
        change(sound(frequencies[lastPressedNoteIndex], 0, 1), ctx)
      }
    }
  }
})
