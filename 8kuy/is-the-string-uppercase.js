// Create a method to see whether the string is ALL CAPS.

// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

// Solution 1
String.prototype.isUpperCase = function() {
	return this.toUpperCase() === this
}

// Solution 2
String.prototype.isUpperCase = function() {
	return this.split('').every(str => str === str.toUpperCase())
}

console.log("c".isUpperCase())
// False
console.log("C".isUpperCase())
// True
console.log("hello I AM DONALD".isUpperCase())
// False
console.log("HELLO I AM DONALD".isUpperCase())
// True
console.log("ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase())
// False
console.log("ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase())
// True