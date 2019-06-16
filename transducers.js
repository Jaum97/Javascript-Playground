const arr = [1,2,3]

const fn = ( x ) => x * 2

const arr2 = arr.map(fn)

const arr3 = arr.reduce(fn)

const mapReduce = ( arr , fn ) => {
	return arr.reduce((col, curr) => {
    	const processed = fn(curr)
        
        return col.concat(processed)
    }, [])
}

const arr4 = mapReduce(arr, fn)

const newArr = [
	{name: 'john', job: 'dev'},
	{name: 'dave', job: 'cashier'},
	{name: 'matt', job: 'accountant'}
]

const arr5 = mapReduce(newArr, (x) => x.job )  


// 
const arr2 = ['1','2','3','4','5']

const fn2 = x => x * 2


const arrayReducer = (target, cur) => target.concat(cur)

const stringReducer = (target, cur) => target + cur


const transducer = (transform) => (reducer) => (target, cur) => {
    		const processed = transform(cur)
        
       		return reducer(target, processed)
}

function mapTransducer(arr, transform) {
	return arr.reduce(transducer(transform)(arrayReducer), [])
}


const test1 = arr.reduce(stringReducer , '')
const test2 = mapTransducer(arr, fn2)
console.log(test1, test2)
