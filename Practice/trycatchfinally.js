const test = () => {
	try {
		console.log( 'potato' )
		throw Error('Error!');
	} catch {
	} finally {
		console.log( 'finally ')
	}
	console.log('outside')
}

test()

const test = () => {
	try {
		console.log( 'potato' ) potato
		throw Error('Error!');
	} catch {
	} finally {
		console.log( 'finally ') finally
	}
	console.log('outside') outside
}

const test = () => {
	try {
		console.log( 'potato' ) potato
		throw Error('Error!'); Error!
	// } catch {
	} finally {
		console.log( 'finally ') finally
	}
	console.log('outside') // never happens
}
