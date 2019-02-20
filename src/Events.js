import UniqueIdGenerator from './UniqueIdGenerator'

class Events {
  constructor () {
    this.data = []
    this.randomize = false
    this.randomizer = new UniqueIdGenerator(Date.now())
  }
  add (eventName, param, targetId, time, args = []) {
    this.data.push({
      targetId,
      eventName,
      param,
      time,
      args,
      rnd: this.randomize ? this.randomizer.generate() : null
    })
  }
}

export default Events
