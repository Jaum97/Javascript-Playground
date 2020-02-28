const arr = [1,2,3]

const obj00 = {1: 1,2: 2,3: 3,}

const proto = Object.getPrototypeOf(obj00)

proto.length = function() {
  return Object.keys(this).length
}

const t00 = Array.from({...obj00, length: obj00.length()})


const arr2 = Array.prototype.map.call(t00, x => x * 2)

arr2
