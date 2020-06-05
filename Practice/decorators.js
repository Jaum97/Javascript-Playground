//https://www.sitepoint.com/javascript-decorators-what-they-are/
function doSomething(name) {
  console.log('Hello, ' + name);
}

function loggingDecorator(wrapped) {
  return function() {
    console.log('Starting');
    const result = wrapped.apply(this, arguments);
    console.log('Finished');
    return result;
  }
}

const wrapped = loggingDecorator(doSomething);


//https://www.sitepoint.com/javascript-decorators-what-they-are/

function log(target, name, descriptor) {
  const original = descriptor.value;
  if (typeof original === 'function') {
    descriptor.value = function(...args) {
      console.log(`Arguments: ${args}`);
      try {
        const result = original.apply(this, args);
        console.log(`Result: ${result}`);
        return result;
      } catch (e) {
        console.log(`Error: ${e}`);
        throw e;
      }
    }
  }
  return descriptor;
}

class Example {
  @log
  sum(a, b) {
    return a + b;
  }
}

const e = new Example();
e.sum(1, 2);
//Arguments: 1,2 ​​​​​at ​​​`Arguments: ${ args }`​​​ ​quokka.ts:5:6​
//Result: 3 ​​​​​at ​​​`Result: ${ result }`​​​ ​quokka.ts:8:8​
