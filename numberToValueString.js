const str = '100000000'

const arr = [...str]
.reverse()
.map((x, i) => i % 3 ? x : x + '.')
.reverse()
.map((x ,i ,arr) => i === arr.length-1 ? x.split('.')[0] : x )
.join('')


console.log(arr)
