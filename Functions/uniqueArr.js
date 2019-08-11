const arr = [
  {name: 'john', age: 21, job: 'dev'},
  {name: 'john', age: 21, job: 'cashier'},
  {name: 'luke', age: 21, job: 'accountant'},
  {name: 'john', age: 21, job: 'dev'},
  {name: 'john', age: 21, job: 'engineer'},
  {name: 'john', age: 21, job: 'professor'},
  {name: 'dave', age: 22, job: 'dev'},
  {name: 'john', age: 23, job: 'dev'},
  {name: 'john', age: 24, job: 'dev'},
  {name: 'john', age: 21, job: 'dev'},
  {name: 'matt', age: 21, job: 'dev'},
]

const uniqueObj = (arr, field) => {
  const auxArr = arr.map(item => item[field])
  
  const auxSet = [...new Set(auxArr)]
  
  const result = auxSet.map(item => arr.find(elem => elem[field] === item))

  return result
}

const t = uniqueObj(arr, 'name')

console.log({t})
