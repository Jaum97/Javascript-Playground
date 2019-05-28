let lang = 'en'

const rtf = new Intl.RelativeTimeFormat(lang, {numeric: 'auto'})

const test = rtf.format(-1, 'year')

console.log({test})
