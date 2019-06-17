let lang = 'en'

const rtf = new Intl.RelativeTimeFormat(lang, {numeric: 'auto'})

const test = rtf.format(-1, 'year')

console.log({test})

let lan = 'pt'

const rtf1 = new Intl.RelativeTimeFormat(lan, {numeric: 'always', style: 'long'})

const test2 = rtf1.format(1, 'day')

console.log({test2})

console.log(Intl.RelativeTimeFormat.supportedLocalesOf(['pt', 'en', 'es', 'asda']))


// Crie um formatador de tempo relativo no seu local
// com os valores padrão sendo passados explicitamente.
const rtf2 = new Intl.RelativeTimeFormat("pt", {
    localeMatcher: "best fit", // outros valores: "lookup"
    numeric: "auto", // outros valores: "auto"
    style: "long", // outros valores: "short" ou "narrow"
});

// Formatação do tempo relativo usando valor negativo (-1).
console.log(rtf2.format(-1, "day"));
// > "há 1 dia"

// Formatação do tempo relativo usando valor positivo (1).
console.log(rtf2.format(1, "day"));
// > "em 1 dia"

console.log(rtf.formatToParts(100, "day"));
