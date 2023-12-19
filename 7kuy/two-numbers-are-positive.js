// Your job is to write a function, which takes three integers a, b, and c as arguments,
// and returns True if exactly two of of the three integers are positive numbers (greater than zero),
// and False - otherwise.

function twoArePositive(a,b,c) {
	let count = 0
  
  for(let i = 0; i < arguments.length; i++) {
  	if(arguments[i] > 0) {
    	count++
    }
  }
  return count === 2 
}

console.log(twoArePositive(2, 4, -3))
// true
console.log(twoArePositive(-4, 6, 8))
// true
console.log(twoArePositive(4, -6, 9))
// true
console.log(twoArePositive(-4, 6, 0))
// false
console.log(twoArePositive(4, 6, 10))
// false
console.log(twoArePositive(-14, -3, -4))
// false