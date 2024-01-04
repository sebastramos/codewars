// Write a function named numbers.

// function should return True if all parameters are of the Number type.

// The function should accept any number of parameters.

function numbers() {
	for(let key in arguments) {
    if(typeof arguments[key] !== 'number') {
    	return false
    }
  }
  return true
}

console.log(numbers(1, 4, 3, 2, 5))
// true
console.log(numbers(1, "a", 3))
// false
console.log(numbers(1, 3, NaN))
// true