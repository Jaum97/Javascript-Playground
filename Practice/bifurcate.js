const bifurcate = (arr, callback) => {
    let [arr1, arr2] = [[], []]

    for(const e of arr) (callback(e) ? arr1 : arr2).push(e);

    return [arr1, arr2]
}

const bifurcate2 = (a, c) => a.reduce((x, y) => (() => { x[c(y) ? 0 : 1].push(y); return x})(), [[], []])





let b=(a, c)=>((x, y)=>{for(let e of a)(c(e)?x:y).push(e);return[x,y]})([],[])

const arr = [1,2,3,4,5,6]

const isEven =  x => x % 2 === 0

const t02 = b(arr, isEven)

t02

const t00 = bifurcate(arr, isEven)

const t01 = bifurcate2(arr, isEven)

t00 // [ [ 2, 4, 6 ], [ 1, 3, 5 ] ] 
t01 // [ [ 2, 4, 6 ], [ 1, 3, 5 ] ] 


export function curry2(func) {
    return function curried(...args) {  
      if (args.length >= func.length) {    
        return func.apply(this, args);   
      } else {   
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }   
      }  
    };
  }

const curry = fn => function curried(...args) {
    if(args.length >= fn.length) {
        return fn.apply(this, args)
    } else {
        return function(...args2) {
            return curried.apply(this, args.concat(args2))
        }
    }
}

const add3 = (a, b, c) => a + b + c

const t04 = curry(add3)(1)(2)(3)

t04 // 6

const useAsPrototype = (base) => (method) => Object.getPrototypeOf(base)[method.name] = curry(method)(base)

const pluck= (arr, prop) => arr.map(obj => obj[prop])

const arr2 = [{ name: 'john'}, { name: 'dave'}, { name: 'matt'}]

useAsPrototype(arr2)(pluck)

const arr3 = arr2.pluck('name')

arr3
