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
