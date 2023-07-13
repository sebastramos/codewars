// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

function remainder(n, m){
	let nums = (n.toString() +' '+ m.toString()).split(' ')
  
  let max = Math.max(...nums)
  let min = Math.min(...nums)
  
  return max % min
}

console.log(remainder(17, 5))
// result = 2 (remainder of `17 / 5`)

console.log(remainder(13, 72))
// result = 7 (remainder of `72 / 13`)

console.log(remainder(0, -1))
// result = 0 (remainder of `0 / -1`)

console.log(remainder(0, 1))
// result - division by zero (refer to the specifications on how to handle this in your language) */

console.log(1 % 0)