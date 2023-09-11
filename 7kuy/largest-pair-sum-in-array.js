// Given a sequence of numbers, find the largest pair sum in the sequence.
// Input sequence contains minimum two elements and every element is an integer.

function largestPairSum(numbers) {
  numbers = numbers.sort((a,b) => b - a)
  
  let addition = numbers.slice(0, 2).reduce((a,b) => a + b)
  
  return addition
}


console.log(largestPairSum([10, 14, 2, 23, 19]))
// 42 (= 23 + 19)
console.log(largestPairSum([99, 2, 2, 23, 19]))
// 122 (= 99 + 23)
