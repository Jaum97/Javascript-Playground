const obj = {
  a: 'john',
  b: 'test',
  c:'são paulo',
  j: 21,
  z: 33,
  d: 'dev'
}

const sortObjectKeys = <T>(obj: T): T => {
  const sortedKeys = Object.keys(obj).sort()

  const sortedObj = sortedKeys.reduce((o, k) => Object.assign(o, {[k]: obj[k]}), {} as T)

  return sortedObj
}

const obj2 = sortObjectKeys(obj)
