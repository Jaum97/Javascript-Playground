const obj = {
	name: 'john',
    job: 'dev',
    
} 

const entries = Object.entries(obj)

for (const [key, value] of entries) {
	console.log(`the value of ${key} is ${value}.`)
}

const map = new Map(entries)

console.log({ map })

const obj2 = Object.fromEntries(map)

console.log({ obj2 }
	    
	    
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
