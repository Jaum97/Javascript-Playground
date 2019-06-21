//https://codeburst.io/a-simple-guide-to-es6-iterators-in-javascript-with-examples-189d052c3d8e

const array = ['a', 'b', 'c', 'd', 'e']
const newArray = [1, ...array, 2, 3]

const array = ['a', 'b', 'c', 'd', 'e']
const iterator = array[Symbol.iterator]()
const newArray = [1]

for (let nextValue = iterator.next(); nextValue.done !== true; nextValue = iterator.next()) {
  newArray.push(nextValue.value)
}

newArray.push(2)
newArray.push(3)
