// Given an array of integers,
// Find the product of the k maximal numbers.

// Notes
// Array size is at least 3.

// Array's numbers Will be mixture of positives, negatives and zeros

// Repetition of numbers in the array could occur.

function maxProduct(numbers, size){
  numbers = numbers.sort((a,b) => a - b).slice(numbers.length - size).reduce((a,b) => a * b)
 return numbers
}

console.log(maxProduct([4,3,5], 2))
// 20
console.log(maxProduct([10,8,7,9], 3))
// 720
console.log(maxProduct([8,6,4,6], 3))
// 288
console.log(maxProduct([10,2,3,8,1,10,4], 5))
// 9600
console.log(maxProduct([13,12,-27,-302,25,37,133,155,-14], 5))
// 247895375
console.log(maxProduct([-4,-27,-15,-6,-1], 2))
// 4
console.log(maxProduct([-17,-8,-102,-309], 2))
// 136
console.log(maxProduct([10,3,-27,-1], 3))
// -30
console.log(maxProduct([14,29,-28,39,-16,-48], 4))
// -253344
console.log(maxProduct([1], 1))
// 1