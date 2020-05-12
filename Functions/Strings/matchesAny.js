const val = 'AD'

const t00 = val === 'RSS' || val === 'NEWS' || val === 'AD'

String.prototype.equalsAny = function(...toMatch) {
	return toMatch.some(s => s === this)
}

const t03 = val.equalsAny('RSS', 'NEWS', 'AD')

t03
