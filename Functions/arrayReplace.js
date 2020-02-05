Array.prototype.replace = function(index, payload) {
	const created = []

	const len = this.length

	for (let i = 0; i < len; i++) {
		if (i !== index) {
			created.push(this[i])
		} else {
			created.push(payload)
		}
	}

	return created
}

const arr = [1,2,3,4]

const arr2 = arr.replace(2, 'potato')

arr2 //[ 1, 2, 'potato', 4 ] 

arr // [ 1, 2, 3, 4 ]
