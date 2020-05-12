let g = window; // outer global
let r = new Realm(); // root realm

let f = r.globalThis.eval("(function() { return 17 })");

f() === 17 // true

Reflect.getPrototypeOf(f) === g.Function.prototype // false
Reflect.getPrototypeOf(f) === r.globalThis.Function.prototype // true
