const concat = (e) => (arr) => arr.concat(e);

const applyInPos = (f, i) => (arr) => arr.map((e, k) => (i === k ? f(e) : e));

const flip = (fn) => (a, b) => fn(b, a);

const t00 = flip((a, b) => `${a} - ${b}`)(1, 2);

const even = (x) => x % 2 === 0;

const _ = { placeholder: true };

const usePlaceholder = (f) => (arg) => ((arg || {}).placeholder ? f : f(arg));

const reduce = (fn, init) => (arr) => arr.reduce(fn, init);

const takeOne = (fn) => (...args) => fn(args[0]);

const curry = (fn) => {
  const { length: l } = fn;

  if (!l) return fn;

  function c(...args) {
    const allArgs = args.length >= l;

    return allArgs ? fn(...args) : (...args2) => c(...args.concat(args2));
  }

  return c;
};

Array.prototype.c = Array.prototype.concat;

const gteProp = (prop) => (a, b) => a[prop] >= b[prop];

const g = gteProp("length");

let c = (f) =>
  function x(...a) {
    return g(a, f) ? f(...a) : (...b) => x(...a.c(b));
  };

const sum3 = (a, b, c) => a + b + c;

const t01 = curry(sum3)(1)()(2)(3);

const t02 = c(sum3)(1)()(2)(3);

t01;
t02;

const filterArr = (fn) =>
  reduce((a, b) => applyInPos(concat(b), fn(b) ? 0 : 1)(a), [[], []]);

const arr00 = [1, 2, 3, 4, 5, 6];

const arr01 = filterArr(even)(arr00);

arr01;
