const obj = {
	address: {
    	info: {
        	city: 'campinas'
        }
    }
}

function getSafe(obj, ...props) {
	const val = obj[props[0]]
    
    if(val === undefined || props.length === 1) return val
    
    return getSafe(val, ...props.slice(1))
}

console.time('recurse')

const arr = Array(10000).fill(obj)

const arr2 = arr.map(x => getSafe(x,'address', 'info','city'))

console.timeEnd('recurse')
