class Events {
  constructor () {
    this.data = []
  }
  add (eventName, param, targetId, time) {
    this.data.push({
      targetId,
      eventName,
      param,
      time
    })
  }
}

export default Events
