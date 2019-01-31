const throttle = (fn, interval) => {
  let lastInvoked = 0
  return () => {
    const now = Date.now()
    console.log(now - lastInvoked, interval)
    if (now - lastInvoked >= interval) {
      lastInvoked = now
      fn()
    }
  }
}
