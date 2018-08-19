class Events {
  constructor () {
    this.data = []
  }
  add (eventName, param, targetId, time, args = []) {
    this.data.push({
      targetId,
      eventName,
      param,
      time,
      args
    })
  }
}

export default Events
