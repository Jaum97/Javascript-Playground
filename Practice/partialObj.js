const obj = {
  name: 'dave',
  age: 21,
  address: {
    city: 'New York',
    ap: 300
  }
}

const partialObj = (({name, age}) => ({name, age}))(obj)

console.log({ partialObj }) 

// partialObj:
// age: 21
// name: "dave"
