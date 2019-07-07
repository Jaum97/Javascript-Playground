//https://blog.bitsrc.io/a-beginners-guide-to-regular-expressions-regex-in-javascript-9c58feb27eb4

var regexConst = new RegExp('abc');

var regexLiteral = /abc/;

var regex = /hello/;

var str = 'hello world';

var result = regex.test(str);

var str2 = 'hello world';
var result2 = regex.exec(str);

console.log(result);
// returns true

console.log(result2);
// returns [ 'hello', index: 0, input: 'hello world', groups: undefined ]

var regexGlobal = /abc/g;
var regexGlobal2 = new RegExp('abc','g')

console.log(regexGlobal.test('abc abc'));
// it will match all the occurence of 'abc', so it won't return 
// after first match.

var regexInsensitive = /abc/i;
console.log(regexInsensitive.test('Abc'));
// returns true, because the case of string characters don't matter 
// in case-insensitive search.

var regex3 = /[bt]ear/;
console.log(regex3.test('tear'));
// returns true
console.log(regex3.test('bear'));
// return true
console.log(regex3.test('fear'));
// return false
