const { log: l } = console

function r() {
	const p1 = new Promise(_ => _( l('p1 done')) ).then(_ => l('p1 then'))
	const p2 = new Promise(_ => _( l('p2 done')) ).then(_ => l('p2 then'))
	const p3 = new Promise(_ => _( l('p3 done')) ).then(_ => l('p3 then'))
	const p4 = new Promise(_ => _( l('p4 done')) ).then(_ => l('p4 then'))
	return [p1, p2, p3, p4]
}

r().reduce( async (prev, curr) => {
	await prev
    return curr
}, Promise.resolve())

//Promise.all(r())
