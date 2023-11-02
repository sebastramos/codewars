// Given a Divisor and a Bound.
// Find the largest integer N.
// Such That

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

// The parameters (divisor, bound) passed to the function are only positive values.

// It's guaranteed that a divisor is Found.

// Solution 1
function maxMultiple(divisor, bound){
	let result = []
	for(let i = 0; i <= bound; i++) {
  	if(i > 0 && i % divisor === 0) {
    	result.push(i)
    }
  }
  return result[result.length -1]
}


console.log(maxMultiple(2,7))
// 6
console.log(maxMultiple(3,10))
// 9
console.log(maxMultiple(7,17))
// 14
console.log(maxMultiple(10,50))
// 50
console.log(maxMultiple(37,200))
// 185
console.log(maxMultiple(7,100))
// 98