var convertToRoman = function(num) {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  var romanized = "";

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};

// reduce solution

const RomanNumeralEnum = {
	1: 'I',
	4: 'IV',
	5: 'V',
	9: 'XI',
	10: 'X',
	40: 'XL',
	50: 'L',
	90: 'XC',
	100: 'C',
	400: 'CD',
	500: 'D',
	900: 'CM',
	1000: 'M'
}

const romanize = num => {
	return Object.entries(RomanNumeralEnum).reduceRight(
		([roman, left], [key, val]) => {

			const rest = Math.trunc(left / Number(key)) || 0

			const str = Array(rest).fill(val).join('') || ''

			return [roman + str, left - rest * Number(key)]
		}, ['', num])[0]
}

console.log(romanize(1444))
