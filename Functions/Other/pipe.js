const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x)

const f1 = ( arr ) => arr.map( x => x * 2)
const f2 = ( arr ) => arr.map( x => x + 2)

const arr1 = [2, 4, 6]

const f3 = (arr) => pipe(f1, f2)(arr)

const arr2 = f3(arr1)
