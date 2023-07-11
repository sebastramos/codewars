// Remove an exclamation mark from the end of a string.
// For a beginner kata, you can assume that the input data is always a string, no need to verify it.

function remove (string) {
	return string.charAt(string.length - 1) === '!' ? string.substr(0, string.length -1) : string
}

console.log(remove("Hi!"))
// "Hi"
console.log(remove("Hi!!!"))
// "Hi!!"
console.log(remove("!Hi"))
// "!Hi"
console.log(remove("!Hi!"))
// "!Hi"
console.log(remove("Hi! Hi!"))
// "Hi! Hi"
console.log(remove("Hi"))
// "Hi"