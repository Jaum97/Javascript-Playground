import { isObjValidAndNotEmpty } from './object'

const treatAsArray = ['activities', 'alternatives', 'photos']

// to be used as reviver in JSON.parse
export const parseRealmProxy = (key: string, value: any): any => {
	const isObj = isObjValidAndNotEmpty(value)

	if (isObj) {
		const hasNum = value[0] !== undefined

		const length = Object.keys(value).length

		const arrayLike = { ...value, length }

		return hasNum ? Array.from(arrayLike) : value
	}
	if (treatAsArray.includes(key)) {
		return []
	}

	return value
}
