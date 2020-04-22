
const createGuard = (handler) => (callback) => (...props) => {
	try {
		callback(...props)
	}catch(err) {
		handler(err)		
	}
}

const callback = (message) => {
	throw message
}

const handler = x => console.log('error ' + x)

const guard = createGuard(handler)

const guarded = guard(callback)
