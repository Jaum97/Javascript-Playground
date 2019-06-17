const test1 = () => 'test1'
const test2 = () => 'test2'
const test3 = () => 'test3'

const fnarr = [test1, test2, test3]

const [t1,t2,t3] = fnarr

const fnarr2 = fnarr.map(fn => fn())

const fnarr3 = fnarr.map(fn => fn.name)

console.log(fnarr2, fnarr3)

const obj = {fn1: t1, fn2: t2, fn3: t3}

Object.entries(obj).map(x => x[1]).map(y => console.log(y()))
