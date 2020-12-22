const tryCatch = (tryer, catcher) => (...args) => {
    try {
        return tryer(...args)
    } catch(err) {
        return catcher(err)
    }
}

const fn = () => { throw 'Bazinga'}

const t00 = tryCatch(fn, console.log)()
