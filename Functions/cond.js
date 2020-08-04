const cond = (conds) => x => {
    for (const [keyFn, valFn] of conds) {
        if(keyFn(x)) {
            return valFn(x)
        }
    }
}

const testCases = cond([
    [x => !x, () => console.log('is falsy')],
    [x => Number.isInteger(x), () => console.log('is number')],
    [x => String(x), () => console.log('is string')],
])

const t00 = testCases('') //is falsy 
const t01 = testCases('x') //is string
const t02 = testCases(1) //is number 
