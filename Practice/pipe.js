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

t1

const pipeableMap = (callback) => (arr) => arr.map(callback)

const t2 = pipe(
	pipeableMap(x => x * 2),
	pipeableMap(x => String(x))
)([1,2,3,4])

t2


