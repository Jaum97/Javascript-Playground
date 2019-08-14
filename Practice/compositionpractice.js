const arr = [
	{ name: 'john', title: 'sr'},
	{ name: 'john', title: 'sr'},
	{ name: 'john', title: 'sr'},
	{ name: 'john', title: 'sr'},
	{ name: 'john', title: 'sr'},
	{ name: 'john', title: 'sr'},
	{ name: 'john', title: 'sr'},
]

const pickProp = prop => item => item[prop]

const pickName = pickProp('name')

const pickTitle = pickProp('title')

const arr2 = arr.map(pickTitle)

arr2
