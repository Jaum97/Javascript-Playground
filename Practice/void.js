void function () {
    console.log('no parenthesis : )')
}()

const t00 = undefined === void 0 // true

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void
// Non leaking arrow functions
var button = {}

button.onclick = () => void doSomething();
