// Write a method that returns true if a given parameter is a power of 4, and false if it's not.
// If parameter is not an Integer (eg String, Array) method should return false as well.

function powerOf4(n) {
	return Number.isInteger(n) && Number.isInteger(Math.log(n) / Math.log(4))
}

console.log(powerOf4(1024))
// true
console.log(powerOf4(44))
// false
console.log(powerOf4("not a positive integer"))
// false