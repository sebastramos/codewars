// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

function testEven(n) {
	return n % 1 !== 0 || n % 2 !== 0 ? false : true
}

// Another solution
function testEven(n) {
	return n % 2 === 0
}

console.log(testEven(0))
console.log(testEven(0.5))
console.log(testEven(1))
console.log(testEven(2))
console.log(testEven(-4))