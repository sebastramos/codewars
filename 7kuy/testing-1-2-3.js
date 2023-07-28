// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. 
// The format is n: string.
// Notice the colon and space in between.

// Solution 1
const number = function(array) {
	let result = []
	for(let i = 1; i <= array.length; i++) {
 		result.push(`${i}: ${array[i - 1]}`)
	}
 return result
}

function number(array) {
	return array.map((el, index) => `${index + 1}: ${el}`)
}

console.log(number([]))
// []

console.log(number(["a", "b", "c"]))
// ["1: a", "2: b", "3: c"]