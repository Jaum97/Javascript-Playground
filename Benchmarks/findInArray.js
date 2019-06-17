console.time('creation')

const arrTest = Array(100000).fill(0).map((x, i) => i === 5000 ? 1 : Math.random())

console.timeEnd('creation')

console.time('find')

const t1 = arrTest.find(x => x === 1)

console.timeEnd('find')

console.time('findIndex - find')

const index = arrTest.findIndex(x => x === 1)
const t2 = arrTest.find((_, i) => i === index)

console.timeEnd('findIndex - find')

console.time('sort - find')

const t3 = arrTest.sort((a, b) => a > b).find(x => x === 1)

console.timeEnd('sort - find')

console.log(t1, t2, t3)
