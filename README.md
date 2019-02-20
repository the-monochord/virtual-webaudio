# virtual-webaudio

A virtual representation of the web audio api elements with added diffing and patching capabilities.

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PXF8ZVL3KPQWE)
[![Build Status](https://travis-ci.org/the-monochord/virtual-webaudio.svg?branch=master)](https://travis-ci.org/the-monochord/virtual-webaudio)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

`npm install virtual-webaudio`

**Note**: The package doesn't contain a bundled version of the code, so you need to have webpack, rollup or browserify to bundle it in your own project.

## Usage

The `virtual-webaudio` library offers you the `VirtualAudioContext` object, which can be used as a drop in replacement for the [AudioContext](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext) object. Use it, like you would use the regular `AudioContext` object to build some sounds. The `VirtualAudioContext` will store all the created nodes and params in an internal storage. Use it only to create nodes and to set their params, but don't use it to modify values in the future. We will use another `VirtualAudioContext` for that and we'll let the diffing tool find the differences for us.

The `VirtualAudioContext` on it's own will not emit any sounds, we need to `render` it to a real `AudioContext`. To do this, we need to import the `render` method and pass it the virtual context and the real context. This will apply all the internally stored calls and methods on the real context.

If you have 2 virtual contexts, then you can diff them using the `diff` method of the library and apply it's returned value to the real context using the `patch` method.

Note: previously assembled virtual contexts can be re-used as many times as you want, since it contains relative timing. The timings get set at rendering/patching.

### Example

```javascript
import { VirtualAudioContext, diff, patch, render } from 'virtual-webaudio'

// create a basic, 300Hz sine wave with 0.5 gain
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

// create a basic, 300Hz sine wave with 0 gain
const modify = () => {
  const ctx = new VirtualAudioContext()

  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.frequency.value = 300

  gain.gain.value = 0

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start()

  return ctx
}

// get the 2 virtual contexts and reserve variable for the real AudioContext
const a = create()
const b = modify()
let ctx

// AudioContext needs to be initialized through user interaction
const demo = () => {
  if(!ctx){
    ctx = new AudioContext()
  }

  // render the 1st virtual context
  render(a, ctx)

  // wait for a second
  setTimeout(() => {
    // find all the stuff, that have changed in b and apply the changes to the real context
    patch(diff(a, b), ctx)
  }, 1000)
}

// bind the demo to clicking on the webpage
document.body.addEventListener('click', demo)
```

## Disabling diff for certain lines with __disableDiff

By default, the diff tool removes every event from the new virtual context, which is identical to what you had in the first virtual context.
But sometimes you can't define some changes via additions, but by introducing unnecessary complexity to the code.

An example of an issue with this can be seen in `poc/timed-sequencing`, where a virtual context contains the instructions necessary to trigger a note.
We have scheduled every step of the gain envelope, which would be played on every trigger call.
Viewing the method calls, their parameters and their order of execution from a diffing tool's perspective shows us, that it will never change, so the diff tool will remove it.

To solve this and mark some method calls always run, we can call the virtual context's `__disableDiff` metho to mark subsequent calls always different from the previous ones. Calling `__enableDiff` will re-enable diffing.

```javascript
const ctx = new VirtualAudioContext()

// ...

const gain = ctx.createGain()
gain.gain.value = 0

ctx.__disableDiff()
gain.gain.cancelAndHoldAtTime(ctx.currentTime)
gain.gain.linearRampToValueAtTime(1, ctx.currentTime + 0.1)
gain.gain.lineraRampToValueAtTime(0, ctx.currentTime + 1)
ctx.__enableDiff()

gain.connect(ctx.destination)

// ...
```

## Demos

The repo contains some examples, which can be viewed by installing the repo locally and by executing `npm run poc`. This will create a local webserver, allowing you to open the demos via `http://localhost:3000`
