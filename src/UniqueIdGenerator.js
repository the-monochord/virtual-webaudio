class UniqueIdGenerator {
  constructor (seed = 0) {
    this.value = seed
  }
  generate () {
    return '#' + ++this.value
  }
}

export default UniqueIdGenerator
