const MAX = 10000000 // browser frier

console.time('setup')

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const createRandomObj = (id = getRandomInt(100)) => ({ id, name: 'test' + id })

console.timeEnd('setup')


console.time('new Set then find')

const arr = Array(MAX).fill(0).map(_ => createRandomObj())

const createSetFromKeyThenFind = (arr, key) => [...new Set(arr.map(x => x[key]))].map(x => arr.find(y => y[key] === x))

const uniques = createSetFromKeyThenFind(arr, 'id')

console.log({ uniques })

console.timeEnd('new Set then find')


console.time('Reduce object')

const appendKeyIfDoesntExistReducer = (a, b) => {
    const key = getRandomInt(100)
    
    if(!a[key]) a[key] = createRandomObj(key)
     
    return a
}

const obj = Array(MAX).fill(0).reduce(appendKeyIfDoesntExistReducer, {})

console.log({ obj })

console.timeEnd('Reduce object')

//setup: 1ms - timer ended
//Object { uniques: (100) […] }
//new Set then find: 174900ms - timer ended
//Object { obj: Object(100) }
//Reduce object: 748ms - timer ended
