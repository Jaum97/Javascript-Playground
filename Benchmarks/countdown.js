const countdown = n => { while (n --> 0) console.log(n) }


console.time('0')
console.groupCollapsed('0')
countdown(1000)
console.groupEnd('0')
console.timeEnd('0')


const countdown2 = n => Array(n).fill(0).map((_, i) => console.log(n - i - 1))


console.time('2')
console.groupCollapsed('2')
countdown2(1000)
console.groupEnd('2')
console.timeEnd('2')


const countdown3 = n => { for(;n > 0; n--, console.log(n)); }


console.time('3')
console.groupCollapsed('3')
countdown3(1000)
console.groupEnd('3')
console.timeEnd('3')


//0: 96ms - timer ended
//2: 101ms - timer ended
//3: 90ms - timer ended


//0: 121ms - timer ended 
//2: 99ms - timer ended
//3: 83ms - timer ended


//0: 117ms - timer ended
//2: 100ms - timer ended
//3: 83ms - timer ended
