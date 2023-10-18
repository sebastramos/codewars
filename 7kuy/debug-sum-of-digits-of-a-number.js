// Debug function getSumOfDigits that takes positive integer to calculate sum of its digits.
// Assume that argument is an integer.

/* 
Example

*/
/* 
function getSumOfDigits(integer) {
  var sum = null;
  var digits =  Math.floor(integer).toString();
  for(var ix = 1; ix < digits.length; ix = sum + 1) {
    sum =+ digits[ix + 1]);
  }
  return sum;
}
 */
 
 // Solution Debugger 1
 function getSumOfDigits(integer) {
  let sum = []
  let digits =  integer.toString()
  for(let i = 0; i < digits.length; i++) {
    sum.push(+digits[i])
  }
  return sum.reduce((a,b) => a + b)
}

// Solution Debugger 2
function getSumOfDigits(integer) {
  return [...String(integer)].reduce((a,b) => +a + +b)
}

console.log(getSumOfDigits(123))
// 6
console.log(getSumOfDigits(223))
// 7
console.log(getSumOfDigits(1337))
// 14 