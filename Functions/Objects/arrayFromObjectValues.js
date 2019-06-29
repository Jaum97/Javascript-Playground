function arrayFromObjectValues(obj){
	return Object.entries(obj).map(x => x[ 1 ])
}

const obj = {
	name: 'john',
    age: '21'
}

const arr = arrayFromObjectValues(obj)

console.log(arr)

// ["john", "21"]
