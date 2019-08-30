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
