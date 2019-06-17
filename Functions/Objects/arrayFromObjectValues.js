const obj3 = {
	name: 'joao',
	job: 'dev',
	age: 21,
	wharev: 'test',
	nested: {
		test: 'test'
	}
}

function arrayFromObjectValues(obj) {
	return Object.entries(obj).map(x => x[1])
}

const arr3 = arrayFromObjectValues(obj3)

console.log(arr)
