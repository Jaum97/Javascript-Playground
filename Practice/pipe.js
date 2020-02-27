const pipe = (...fns) => (value) => fns.reduce((v, f) => f(v), value)

const toNumber = x => Number(x)

const timesThree = x => x * 3

const toArray = x => [x, x]

const t1 = pipe(
	toNumber,
	timesThree,
	toArray 
)('3')

t1 // [ 'AAA', 'AAA' ] ​​​​​at ​​​t1​​​ ​quokka.ts:25:0​

// TODO: Type this properly
const pipeableArrayMethod = <M extends (...args: any[]) => any>(method: M) =>  {
  if(method.apply([], [Boolean, []]) === undefined) {
    throw TypeError(`${method} is not a pipeable array method`);
  }

  return <C extends [(...args: any[]) => any, ...any[]]>(...callback: C) => {
    return <T>(arr: Array<T>): ReturnType<C[0]> => {

      if(!Array.isArray(arr)) {
        throw TypeError(`type ${typeof arr} is not a valid array`);
      }
      
      return method.apply(arr, callback)
    }
  }
}

const pipeableMap = pipeableArrayMethod(Array.prototype.map)

const pipeableFilter = pipeableArrayMethod(Array.prototype.filter)

const pipeableReduce = pipeableArrayMethod(Array.prototype.reduce)

const t2 = pipe(
	pipeableMap(x => x * 2),
	pipeableMap(x => String(x))
)([1,2,3,4])

t2 // [ '2', '4', '6', '8' ] at ​​​t2​​​ ​quokka.ts:34:0​

const t3 = pipeableFilter(x => x % 2 === 0)([1,2,3,4])

t3 // [ 2, 4 ] ​​​​​at ​​​t3​​​ ​quokka.ts:40:0​

const t4 = pipeableReduce((a,b) => a + b, 5)([1,2,3,4])

t4

const t5 = pipeableArrayMethod(x => x * 2)(x => x)([1,2,3])

t5

const t6 = (Array.prototype)

t6

const fn1 = x => {
 
  if(!Array.isArray(x)) {
    throw TypeError('potato')
  }

  return y => {
    

    x.map(y)

  } 
  
}

const t7 = fn1(2)(x => x * 2)

t7
