// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

function sumStr(a,b) {
	let add = Number(a) + Number(b)
  return add.toString()
}

console.log(sumStr("4", "5"))
// "9"
console.log(sumStr("34", "5"))
// "39"
console.log(sumStr("", ""))
// "0"
console.log(sumStr("2", ""))
// "2"
console.log(sumStr("-5", "3"))
// "-2"

// If either input is an empty string, consider it as zero.
// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)