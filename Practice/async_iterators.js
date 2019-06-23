//https://itnext.io/understand-async-iterators-665259680044

const streamify = function (element, event) {
  const pullQueue = []
  const pushQueue = []
  let done = false
  const pushValue = async (args) => {
    if (pullQueue.length !== 0) {
      const resolver = pullQueue.shift()
      resolver(...args)
    } else {
      pushQueue.push(args)
    }
  }

  const pullValue = () => {
    return new Promise((resolve) => {
      if (pushQueue.length !== 0) {
        const args = pushQueue.shift()
        resolve(...args)
      } else {
        pullQueue.push(resolve)
      }
    })
  }

  const handler = (...args) => {
    pushValue(args)
  }

  element.addEventListener(event, handler)
  return {
    [Symbol.asyncIterator]() {
      return this
    },
    next: () => ({
      done,
      value: done ? undefined : pullValue()
    }),
    return: () => {
      done = true
      element.removeEventListener(event, handler)
      return {done}
    },
    throw: (error) => {
      done = true
      return {
        done,
        value: Promise.reject(error)
      }
    }
  }
}
