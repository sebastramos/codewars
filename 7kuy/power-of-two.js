// Complete the function power_of_two/powerOfTwo that determines if a given non-negative integer is a power of two.

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

// Beware of certain edge cases
// for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.


function isPowerOfTwo(n) {
	for(let i = 0; i < n; i++) {
   	if (Math.pow(2, i) === n) {
    	return true
    }
	}
  return false
}

console.log(isPowerOfTwo(1024))
// -> true
console.log(isPowerOfTwo(4096))
// -> true
console.log(isPowerOfTwo(333))
// -> false