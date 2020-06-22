//TODO

const obj = {
	arr: [1,2,3]
}

export const pickProp = <K extends string>(prop: K) =>  function ret<
O extends { [key in K]?: any }
>(
	obj: O, nextPath?: string
): O[K] {
	obj
	nextPath
	if (!obj) {
		throw TypeError(`Cannot convert ${obj} to object`)
	}

	const path = prop.split('.')

	path

	return path.length > 1  
		? ret(obj[nextPath || prop], path.slice(1)) 
		: obj[prop]
}

const t00 = pickProp('arr.length')(obj)

t00
