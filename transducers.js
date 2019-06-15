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

console.log({arr2, arr5})
