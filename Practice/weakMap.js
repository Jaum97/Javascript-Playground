//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/WeakMap

var wm1 = new WeakMap(),
    wm2 = new WeakMap(),
    wm3 = new WeakMap();
var o1 = {},
    o2 = function(){},
    o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // um valor pode ser qualquer coisa, incluindo um objeto or uma função
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // chaves e valores pode ser quaisquer objetos. Até mesmo WeakMaps! 

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined, pois não existe valor para o2 em wm2 
wm2.get(o3); // undefined, pois este é o valor definido

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (mesmo se o valor armazenado for 'undefined')

wm3.set(o1, 37);
wm3.get(o1); // 37
wm3.clear();
wm3.get(o1); // undefined, pois wm3 foi 'limpado' e não há mais valor para o1.

wm1.has(o1);   // true
wm1.delete(o1);
wm1.has(o1);   // false
