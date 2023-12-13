// Each floating-point number should be formatted that only the first two decimal places are returned.
// You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Don't round the numbers!
// Just cut them after two decimal places!


function twoDecimalPlaces(number) {
	let num = String(number).split('.')
	return Number(num[0] + '.' + num[1].slice(0,2))
}

console.log(twoDecimalPlaces(32.8493))
// 32.84  
console.log(twoDecimalPlaces(14.3286))
// 14.32
console.log(twoDecimalPlaces(10.1289767789))
// 10.12
console.log(twoDecimalPlaces(-7488.83485834983))
// -7488.83
console.log(twoDecimalPlaces(4.653725356))
// 4.65