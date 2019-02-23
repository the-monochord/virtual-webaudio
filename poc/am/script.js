/* global virtualWebaudio, AudioContext  */

const { VirtualAudioContext, render, patch, diff } = virtualWebaudio

let isSoundOn = false
let baseFrequency = 440
let amFrequency = 40

const demo = () => {
  const ctx = new VirtualAudioContext()

  // ------------------

  const osc = ctx.createOscillator()
  osc.type = 'sine'
  osc.frequency.value = baseFrequency

  osc.start()

  const gain = ctx.createGain()
  gain.gain.value = 0

  osc.connect(gain)
  if (isSoundOn) {
    gain.connect(ctx.destination)
  }

  // ------------------

  const am = ctx.createOscillator()
  am.type = 'sine'
  am.frequency.value = amFrequency
  am.start()

  const amHeight = ctx.createGain()
  amHeight.gain.value = 1

  am.connect(amHeight)
  amHeight.connect(gain.gain)

  // ------------------

  return ctx
}

let ctx = null
let old = null

const change = virtualCtx => {
  if (!ctx) {
    ctx = new AudioContext()
  }

  if (old === null) {
    render(virtualCtx, ctx)
  } else {
    patch(diff(old, virtualCtx), ctx)
  }

  old = virtualCtx
}

const toggleIsSoundOn = () => {
  isSoundOn = !isSoundOn
  change(demo())
}

const setBaseFrequency = f => {
  baseFrequency = f
  document.getElementById('base-frequency-value').innerText = `Base: ${f} Hz sine`
  change(demo())
}

const setAmFrequency = f => {
  amFrequency = f
  document.getElementById('am-frequency-value').innerText = `AM: ${f} Hz sine`
  change(demo())
}

document.getElementById('toggle-sound').addEventListener('click', toggleIsSoundOn)
document.getElementById('base-frequency').addEventListener('input', e => setBaseFrequency(e.target.value))
document.getElementById('am-frequency').addEventListener('input', e => setAmFrequency(e.target.value))
