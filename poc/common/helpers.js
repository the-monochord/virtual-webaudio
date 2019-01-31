const throttle = (fn, interval) => {
  let lastInvoked = 0
  return () => {
    const now = Date.now()
    if (now - lastInvoked >= interval) {
      lastInvoked = now
      fn()
    }
  }
}

const once = fn => {
  let invoked = false
  return () => {
    if (!invoked) {
      invoked = true
      fn()
    }
  }
}
