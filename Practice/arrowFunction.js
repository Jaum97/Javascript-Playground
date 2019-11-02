const arr = [1,2,3]

const arr2 = arr.map(x => x*2)

const arr3 = arr.map(function(x) {return x*2})

const pickProp = prop => obj => obj[prop]

function pickProp2(prop) {
  return function(obj) {
    return obj[prop]
  }
}

function Person() {
  // O contrutor Person() define `this` como uma instância dele mesmo.
  this.age = 0;

  setInterval(function growUp() {
    // Em modo não estrito, a função growUp() define `this` 
    // como o objeto global (porque é onde growUp() é executado.),
    // que é diferente ao `this`
    // definido pelo construtor Person().
    this.age++;
  }, 1000);
}

function Person2(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| corretamente se refere ao objeto Person
  }, 1000);
}

var p = new Person();

var p2 = new Person2();

const age = p.age

const age2 = p.age

age2
