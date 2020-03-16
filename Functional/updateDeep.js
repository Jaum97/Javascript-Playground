const areEquals = (a, b) => a === b

const pipe = (...fns) => val => fns.reduce((currVal, currFn) => currFn(currVal), val)

const curry = f => function curried(...args) { return args.length >= f.length ? f(...args) : (...args2) => curried(...args.concat(args2)) }

const isPrototypeEquals  = pipe(Object.getPrototypeOf, curry(areEquals))

const equalsFunction = isPrototypeEquals(() => {})

const isFunctionPrototype = pipe(Object.getPrototypeOf, equalsFunction)

const t00 = isFunctionPrototype(async() => {})

const unless = (fn, fn2) => val => fn(val) ? fn2(val) : val

const safeIsFunctionPrototype = unless(Boolean, isFunctionPrototype)

const isUndefined = safeIsFunctionPrototype({})

const updateDeep = function (path, payload, obj) {
	const created = JSON.parse(JSON.stringify(obj))

	const pathArr = path.split('.')

	const len = pathArr.length - 1

	let nested = created

	for (let i = 0; i <= len; i++) {
		const key = pathArr[i]

		if (i === len) {
			if(safeIsFunctionPrototype(payload)) {
				nested[key] = payload(nested[key])
			} else {
				nested[key] = payload
			}
		}

		nested = nested[key]
	}

	return created

}


const obj = {
	a: {
		b: {
			c: 'potato'
		}
	},
	skills: [1,2,3,4]
}

const pipeableFilter = callback => array => array.filter(callback)

const isEven = x => x % 2 === 0

const pipeablePush = elem => arr => arr.concat(elem)

const pipeableArrayMethod = method => callback => arr => method.call(arr, callback)

const testArr = [1,2,3,4]

const pipeableFind = pipeableArrayMethod(Array.prototype.find)

const placeSampleObject = sample => index => arr => arr.map((x, i) => i === index ? sample : x)

const placeJohn = placeSampleObject({ name: 'john' })

const obj2 = updateDeep('skills', placeJohn(2), obj)

obj2


