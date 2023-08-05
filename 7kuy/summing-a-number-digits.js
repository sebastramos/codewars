// Write a function named sumDigits which takes a number as input 
// and returns the sum of the absolute value of each of the number's decimal digits.

function sumDigits(number) {
	number = String(number).split('').filter(n => isNaN(n) !== true)
 	return number.reduce((acc,c) => +acc + +c, 0)
}

console.log(sumDigits(10))
// 1
console.log(sumDigits(99))
// 18
console.log(sumDigits(-32))
// 5

// Let's assume that all numbers in the input will be integer values.