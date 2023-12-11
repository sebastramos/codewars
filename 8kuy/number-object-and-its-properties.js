// Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

// To judge the number n.
// If n is one of the above five constants, return one of these string:

/* 
"Input number is Number.MAX_VALUE"
"Input number is Number.MIN_VALUE"
"Input number is Number.NaN"
"Input number is Number.NEGATIVE_INFINITY"
"Input number is Number.POSITIVE_INFINITY"
Other values should return "Input number is xxx". xxx means this number.
*/

// What you need to think about is how to judge it correctly and effectively and don't forget isNaN().

function whatNumberIsIt(n) {
	if(n === Infinity) {
  	return "Input number is Number.POSITIVE_INFINITY"	
  } else if(n === -Infinity) {
  	return "Input number is Number.NEGATIVE_INFINITY"
  } else if(n === 1.7976931348623157e+308) {
  	return "Input number is Number.MAX_VALUE"
  } else if(n === 5e-324) {
  	return "Input number is Number.MIN_VALUE"
  } else if(isNaN(n)) {
  	return "Input number is Number.NaN"
  } else {
  	return `Input number is ${n}`
  }
}

console.log(whatNumberIsIt(1/0))
// "Input number is Number.POSITIVE_INFINITY"
console.log(whatNumberIsIt(100))
// "Input number is 100"
console.log(whatNumberIsIt(1.7976931348623157e+308))
// "Input number is Number.MAX_VALUE"
console.log(whatNumberIsIt(5e-324))
// "Input number is Number.MIN_VALUE"
console.log(whatNumberIsIt(-Number.MAX_VALUE*2))
// "Input number is Number.NEGATIVE_INFINITY"
console.log(whatNumberIsIt(NaN))
// "Input number is Number.NaN"
console.log(whatNumberIsIt(Infinity+1))
// "Input number is Number.POSITIVE_INFINITY"