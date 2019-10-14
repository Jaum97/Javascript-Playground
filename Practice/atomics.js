//https://devdocs.io/javascript/global_objects/atomics
//Atomics[Symbol.toStringTag]
//The value of this property is "Atomics".

// create a SharedArrayBuffer with a size in bytes
var buffer = new SharedArrayBuffer(16);
var uint8 = new Uint8Array(buffer);
uint8[0] = 7;

// 7 + 2 = 9
console.log(Atomics.add(uint8, 0, 2));
// expected output: 7

console.log(Atomics.load(uint8, 0));
// expected output: 9

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Atomics/add
var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);

Atomics.add(ta, 0, 12); // retorna 0, o valor antigo
Atomics.load(ta, 0); // 12
