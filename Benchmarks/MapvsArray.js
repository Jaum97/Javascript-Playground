console.time('create')

const arr1 = Array(10000).fill(0).map((_, i) => i + 1)

const fn = x => [x, x]

const arr2 = arr1.map(fn)

const map1 = new Map(arr2)

console.timeEnd('create')


console.time('find')

const found1 = arr1.find(x => x === 50)

console.timeEnd('find')

console.time('access')

const found2 = arr1[49]

console.timeEnd('access')

console.time('get')

const found3 = map1.get(50)

console.timeEnd('get')

console.log({found1, found2, found3})

/*
create: 3.891845703125ms
find: 0.0546875ms
access: 0.0068359375ms
get: 0.010986328125ms
*/
