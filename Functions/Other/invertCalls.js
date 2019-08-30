const pickProp = prop => obj => obj[prop]

const invertCalls = fn => param1 => param2 => fn(param2)(param1)  


const pickFromObj = invertCalls(pickProp)

const obj = {
  name: 'dave',
  age: 21
}

const test = pickProp('name')(obj)

console.log({test})

const test2 = pickFromObj(obj)('age')

console.log({test2})


// TODO: create for any number of fns 
const randomFn = (prop = 't') => 
(obj = {t: [1,2,3]}) => 
(pos= 1) => 
obj[prop][pos]

const invertCallsAny = fn => {
  let aux = fn
  let count = 0
  
  while(aux instanceof Function){
    count ++
    aux = aux()
  }
  
  
  //return (param1) => (param2) => fn(param2)(param1)  
}

const t = invertCallsAny(randomFn)
