function removeDuplicates(key, arr) {
	const obj = {}
	const list = []
	const len = arr.length

	for (let i = 0; i < len; i++) {
		const k = arr[i][key]
		
		if (!obj[k]) list.push(arr[i])

		obj[k] = k
	}

	return list;
}

const getRand = () => Math.round(Math.random() * 100)

const obj = () => {
	const r = getRand()
	return {
		key: r,
		name: 'john' + r
	}
}

const arr = Array(100000).fill(null).map(obj)
console.time()
const t00 = removeDuplicates('key', arr).length
console.timeEnd()


//default: 12.004ms ​​​​​
//default: 11.689ms
//default: 12.328ms ​​​​​ ​​​​​
