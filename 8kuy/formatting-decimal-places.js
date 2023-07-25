// Each number should be formatted that it is rounded to two decimal places. 
// You don't need to check whether the input is a valid number because only valid numbers are used in the tests.


function twoDecimalPlaces(n) {
	return Number(n.toFixed(2))
}

console.log(twoDecimalPlaces(83.953592948424))
// 83.95
console.log(twoDecimalPlaces(4.659725356))
// 4.66
console.log(twoDecimalPlaces(5.5589))
// 5.56   
console.log(twoDecimalPlaces(3.3424))
// 3.34