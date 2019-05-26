const obj = {
	name: 'john',
    job: 'dev',
    
} 

const entries = Object.entries(obj)

for (const [key, value] of entries) {
	console.log(`the value of ${key} is ${value}.`)
}
