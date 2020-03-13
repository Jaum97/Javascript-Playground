//http://kestas.kuliukas.com/YCombinatorExplained/

var fix = f => (x => f(v => x(x)(v)))(x => f(v => x(x)(v)));

const t01 = fix(x => 2)

t01

var y = (le) => (f) => f(f)((f) => le((x) => (f(f))(x)))
    

const t02 = y(x => 2)

const t03 = t02(x => x)

const t04 = t03()

t04
