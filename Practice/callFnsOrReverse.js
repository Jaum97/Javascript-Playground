const fns = new Map()

const sumOne = x => Number(x) + 1

const sumOneR = x => Number(x) - 1

const timesTwo = x => x * 2

const timesTwoR = x => x / 2

const transformString = x => String(x) + 'a'

const transformStringR = x => Number(x)

const fnsArr = [sumOne, timesTwo, transformString,sumOneR,timesTwoR, transformStringR]

const findReverse = fn => fnsArr.find(f =>  f.name === fn.name + 'R')

const callAppropriate = (rev = false) => (fn) => rev ? findReverse(fn) : fn

const pipe = (t = false) => (...fns) => (...args) => fns.reduce((v, f) => callAppropriate(t)(f)(v), args)


const t = pipe()(sumOne, timesTwo, transformString)(3)

t

// const t1 = fns.entries()
// const sumOneR = minusOne
// const timesTwoR = divideByTwo
// const transformNumberR = transformNumber
// fns.set(sumOne, minusOne)
// fns.set(timesTwo, divideByTwo)
// fns.set(transformString, transformNumber)
