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

// actually useless:
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values

const obj2 = {
	name: 'john',
    age: '21'
}

const arr2 = Object.values(obj2)

console.log({arr2})

// ["john", "21"]
