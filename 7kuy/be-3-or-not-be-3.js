// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three.
// If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

// Try to avoid using the % (modulo) operator.

function divisibleByThree(str){
	return str.split('').reduce((a,b) => +a + +b,0) % 3 === 0
}

console.log(divisibleByThree("123"))
// true
console.log(divisibleByThree("19254"))
// true
console.log(divisibleByThree("88"))
// false
console.log(divisibleByThree("1"))
// false
console.log(divisibleByThree("8409"))
//  true
console.log(divisibleByThree("100853"))
//  false
console.log(divisibleByThree("33333333"))
//  true
console.log(divisibleByThree("7"))
//  false