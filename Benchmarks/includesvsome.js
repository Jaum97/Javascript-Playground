const getObj = id => ({ id })

const MAX = 1_000_000

const arr = Array(MAX).fill(0).map((_, i) => getObj(i))

const arr2 = Array(100).fill(0).map((_, i) => getObj(i))

const pluck = prop => obj => obj[prop]

console.time('1')
const t00 = arr2.map(pluck("id"))

const arr4 = arr.filter(a1 => !t00.includes(a1.id))
console.timeEnd('1')

console.time()
const arr3 = arr.filter(a1 => !arr2.some(a2 => a2.id === a1.id))
console.timeEnd()







