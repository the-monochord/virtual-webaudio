/*
the goal of this poc is to be able to
  create oscillator nodes with frequency values
  create gain nodes with gain values
  connect them to each other
  connect them up to the audio context's destination

  have a way to internally represent these nodes
  be able to diff 2 internal representations
  be able to create patch tasks to update the live version of the nodes with as little modification as possible

we need an internal vocabulary of all the used nodes and the context
  multiple contexts?
*/

// TODO: VirtualAudioContext should only hold a single object of patches, which is the create
// render() should wrap the patch into a {create: ..., modify: {}, delete: {}} format
// diff() should expect only to get create datas from patches, should output {create: ..., modify: ..., delete: ...}

const {
  compose,
  reject,
  equals,
  fromPairs,
  map,
  sort,
  subtract,
  apply,
  union,
  keys,
  prop,
  prepend,
  of,
  eqProps,
  pluck
} = R

const CTX_DESTINATION = 'ctx.destination'

class UniqueIdGenerator {
  constructor (seed = 0) {
    this.value = seed
  }
  generate () {
    return ++this.value + ''
  }
}

class VirtualAudioContext{
  constructor() {
    this.uniqueIdGenerator = new UniqueIdGenerator(0)
    this.destination = CTX_DESTINATION
    this.patch = {}
  }
  createOscillator() {
    const id = this.uniqueIdGenerator.generate()

    const data = {
      frequency: {
        value: 440
      },
      _: {
        id,
        type: 'oscillator',
        connectedTo: null,
        started: false
      }
    }

    this.patch[id] = data

    return {
      ...data,
      connect: target => {
        if (typeof target === 'object' && target._.id) {
          data._.connectedTo = target._.id
        } else if (target === CTX_DESTINATION) {
          data._.connectedTo = target
        }
      },
      start: () => {
        data._.started = true
      }
    }
  }
  createGain() {
    const id = this.uniqueIdGenerator.generate()

    const data = {
      gain: {
        value: 1
      },
      _: {
        id,
        type: 'gain',
        connectedTo: null
      }
    }

    this.patch[id] = data

    return {
      ...data,
      connect: target => {
        if (typeof target === 'object' && target._.id) {
          data._.connectedTo = target._.id
        } else if (target === CTX_DESTINATION) {
          data._.connectedTo = target
        }
      }
    }
  }
}

// -------------

/*
const getIds = (category, patches) => compose(
  sort(subtract),
  apply(union),
  map(compose(keys, prop(category)))
)(patches)

// can we also return the same values too?
// maybe remove the reject(equals(true)), keep the bool value and make the 2nd map to get values in all cases?
// finally: call partition based on the bool value
const getDiffs = (category, patches) => compose(
  fromPairs,
  map(id => compose(
    prepend(id),
    of,
    pluck(id),
    pluck(category)
  )(patches)),
  keys,
  reject(equals(true)),
  fromPairs,
  map(id => compose(
    prepend(id),
    of,
    apply(eqProps(id)),
    pluck(category)
  )(patches)),
  getIds
)(category, patches)
*/

// -------------

const diff = (virtualCtxA, virtualCtxB) => {
  const patchA = virtualCtxA.patch
  const patchB = virtualCtxB.patch

  // const sameValues = ???
  // const differentValues = getDiffs('create', [patchA, patchB])

  // values of differentValues can be:
  //   [a, b] = modify - can also be delete + modify
  //   [a, undefined] = delete
  //   [undefined, a] = create
  // ----
  // what if an element was deleted and a new one created? "a" has type="gain" for #2, but "b" has type="oscillator" for #2?

  // console.log(differentValues)

  return {
    create: {},
    modify: {},
    delete: {}
  }
}
const patch = (patch, ctx) => {
  
}
const render = (virtualCtx, ctx) => {
  patch({
    create: virtualCtx.patch,
    modify: {},
    delete: {}
  }, ctx)
}

// -------------

const create = () => {
  const ctx = new VirtualAudioContext()

  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.frequency.value = 200

  gain.gain.value = 0.5

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start()

  return ctx
}

const modify = () => {
  const ctx = new VirtualAudioContext()

  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.frequency.value = 200

  gain.gain.value = 0 // this is the line, that changed

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start()

  return ctx
}

const a = create()
const b = modify()
const ctx = new AudioContext()

render(a, ctx)

setTimeout(() => {
  patch(diff(a, b), ctx) // should turn off the gain's volume
}, 1000)

// next update = c --> patch(diff(b, c), ctx)
