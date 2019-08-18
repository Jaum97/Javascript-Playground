//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/Apply

/* número min/max em um array */
var numbers = [5, 6, 2, 3, 7];

/* utilizando Math.min/Math.max apply */
var max = Math.max.apply(null, numbers); /* Isso está prestes a ser igual a Math.max(numbers[0], ...)
                                            ou Math.max(5, 6, ...) */
var min = Math.min.apply(null, numbers);

/* vs. algoritmo simples baseado em loop */
max = -Infinity, min = +Infinity;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
