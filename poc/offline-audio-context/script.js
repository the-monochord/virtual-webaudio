/* global virtualWebaudio, OfflineAudioContext, once, makeDownload */

const { VirtualAudioContext, render } = virtualWebaudio

const create = () => {
  const ctx = new VirtualAudioContext()

  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.type = 'triangle'
  osc.frequency.value = 300

  gain.gain.value = 1

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start()

  gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 1)

  return ctx
}

// -----------------------------------

const a = create()

const demo = () => {
  const ctx = new OfflineAudioContext(1, 44100 * 2, 44100)

  render(a, ctx)
  ctx.startRendering().then(abuffer => {
    makeDownload(abuffer, ctx.length)
  }).catch(e => {
    console.error(e)
  })
}

document.getElementsByTagName('button')[0].addEventListener('click', once(demo))
