const obj = {
	name: 'dave',
	address: undefined,
	job: 'dev'
}

const arr = Array(1000).fill(obj)

const cleanObj = x => {
	const y = {}
	for(const key in x) {
		if(x[key]) y[key] = x[key]
	}
	return y
}

const obj2 = cleanObj(obj)

obj2

console.time('map')
const arr2 = arr.map(cleanObj)
console.timeEnd('map')

console.time('for')
const arr3 = []

for(const x of arr) {
	arr3.push(cleanObj(x))
}
console.timeEnd('for')










