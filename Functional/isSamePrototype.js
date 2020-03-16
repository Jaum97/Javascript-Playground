//taken from https://stackoverflow.com/questions/5999998/check-if-a-variable-is-of-function-type

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
