


const pipe = (...fns) => (value) => fns.reduce((v, f) => f(v), value)

const toStringify = x => String(x)

const toUpperCase = x => x.toUpperCase()

const timesThree = x => x + x + x

const toArray = x => [x, x]



const t1 = pipe(
	toStringify,
	toUpperCase,
	timesThree,
	toArray 
)('a')

t1 // [ 'AAA', 'AAA' ] ​​​​​at ​​​t1​​​ ​quokka.ts:25:0​

const pipeableMap = (callback) => (arr) => arr.map(callback)

const t2 = pipe(
	pipeableMap(x => x * 2),
	pipeableMap(x => String(x))
)([1,2,3,4])

t2 // [ '2', '4', '6', '8' ] at ​​​t2​​​ ​quokka.ts:34:0​

const pipeableArrayMethod = (method) => (callback) => (arr) => method.call(arr, callback)

const pipeableFilter = pipeableArrayMethod(Array.prototype.filter)

const t3 = pipeableFilter(x => x % 2 === 0)([1,2,3,4])

t3 // [ 2, 4 ] ​​​​​at ​​​t3​​​ ​quokka.ts:40:0​
