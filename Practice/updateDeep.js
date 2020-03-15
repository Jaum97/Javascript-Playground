
const updateDeep = function (path, payload, obj) {
	const created = JSON.parse(JSON.stringify(obj))

	const pathArr = path.split('.')

	const len = pathArr.length - 1

	let nested = created

	for (let i = 0; i <= len; i++) {
		const key = pathArr[i]

		if (i === len) {
			nested[key] = payload
		}

		nested = nested[key]
	}

	return created

}

const obj = {
	a: {
		b: {
			c: 'potato'
		}
	},
	skills: []
}

const obj2 = updateDeep('a.b.c', 'banana', obj)

const t00 = obj // { a: { b: { c: 'potato' } }, skills: [] } 
t00

const t01 = obj2 // { a: { b: { c: 'banana' } }, skills: [] }

t01

export const curry=f=>function c(...a){return a.length>=f.length?f(...a):(...b)=>c(...a,...b)}

const arr = Array(1000).fill(obj)

console.time('update 1000')

const arr2 = arr.map(curry(updateDeep)('a.b.c', 'banana'))

console.timeEnd('update 1000')

//update 1000: 17.125ms
//update 1000: 11.177ms 
//update 1000: 13.234ms 

const t02 = arr[4]['a']

const t03 = arr2[4]['a']

t02
t03

console.time('')
const t = Array(1000).fill(0).map((_, i) => i + 1)
console.timeEnd('')
