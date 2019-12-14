const arr = [[1, 1], [2, 2], [3, 3]]

const map = new Map(arr)

Map.prototype.map = function(fn) {
  const aux = []
  
  this.forEach((item, i, arr) => aux.push(fn(item, i, arr)));

  return aux
}

const fn = x => x * 2
 
const map2 = map.map(fn)

// map  Map { 1 => 1, 2 => 2, 3 => 3 }
// map2 [ 2, 4, 6 ]

