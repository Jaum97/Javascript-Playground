function test() {
	 return function myFunc() {
  		if (myFunc.caller == null) {
    		return 'The function was called from the top!';
  		} else {
    		return 'This function\'s caller was ' + myFunc.caller;
  		}
	}
}

const test1 = test()

console.log(test1())
