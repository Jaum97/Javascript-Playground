export function curry(func) {
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

export const curry2 = f => ({ c(...a){ return a.length >= f.length ? f(...a) : (...b) => this.c(...a, ...b)} }).c()

const add3 = (a,b,c) => a + b + c


const curried = curry2(add3)

const t00 = curried(2)()(3,4)

t00

export const curry3=f=>function c(...a){return a.length>=f.length?f(...a):(...b)=>c(...a,...b)} 

const curried2 = curry3(add3)

const t01 = curried2(2)()()(4)()(3)

t01
