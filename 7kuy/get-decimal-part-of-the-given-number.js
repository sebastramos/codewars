// Write a function that returns only the decimal part of the given number.
// You only have to handle valid numbers, not Infinity, NaN, or similar.
// Always return a positive decimal part.

// Solution 1
function getDecimal(n) {
  let decimal = String(Math.abs(n)).split('.')[1]
  return decimal === undefined ? 0 : Number('0.' + decimal)
}

// Solution 2
function getDecimal(n){
  return Math.abs(n%1);
}


console.log(getDecimal(2.4))
// 0.4
console.log(getDecimal(-0.2))
// 0.2
console.log(getDecimal(10))
// 0
console.log(getDecimal(-1.2))
// 0.2
console.log(getDecimal(743.543))
// 0.543