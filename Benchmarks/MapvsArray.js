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





const fn00 = (_, i): Readonly<[number, any]> => [i, { potato: "potato" + i }];

console.time('arr00')

const arr00 = Array(100).fill(0).map(fn);

const t00 = arr00.map(x => [x[0], { ...x[1], potato: x[1].potato + '1'}])

console.timeEnd('arr00')

console.time('map00')
const map00 = new Map(arr00)

const t01 = map00.entries()

for(let i of t01) {
	map00.set(i[0], { ...i[1], potato: i[1].potato + '1'})
}
console.timeEnd('map00')





