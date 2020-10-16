//https://www.rapidtables.com/math/symbols/Set_Symbols.html

const A = [1, 2, 3, 4, 5]

const B = [3, 4, 5, 6, 7]

const union = a => b => new Set([...a, ...b])

const intersection = a => b => new Set([...a, ...b].filter(e => a.includes(e) && b.includes(e)))

const relativeComplement = a => b => new Set(a.filter(e => !b.includes(e)))

const symetricDifference = a => b => new Set([...a, ...b].filter(e => !(a.includes(e) && b.includes(e))))

const results = {
    A,
    B,
    'A⋂B': intersection(A)(B),
    'A⋃B': union(A)(B),
    'A-B': relativeComplement(A)(B),
    'B-A': relativeComplement(B)(A),
    'A∆B': symetricDifference(A)(B)
}

console.log(results)

// { 
// A: [ 1, 2, 3, 4, 5 ], 
// B: [ 3, 4, 5, 6, 7 ], 
// 'A⋂B': Set { 3, 4, 5 }, 
// 'A⋃B': Set { 1, 2, 3, 4, 5, 6, 7 }, 
// 'A-B': Set { 1, 2 }, 
// 'B-A': Set { 6, 7 }, 
// 'A∆B': Set { 1, 2, 6, 7 } 
// }
