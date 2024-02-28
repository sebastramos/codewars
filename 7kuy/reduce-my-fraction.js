// Write a function which reduces fractions to their simplest form! 
// Fractions will be presented as an array of strictly positive integers, and the reduced fraction must be returned as an array

// input:   [numerator, denominator]
// output:  [reduced numerator, reduced denominator]
// example: [45, 120] --> [3, 8]
// All numerators and denominators will be positive integers.

// Note: This is an introductory Kata for a series... coming soon!


function reduce(fraction) {
	let result = []
  for(let i = fraction[0]; i > 0; i--) {
  	if(fraction[0] % i === 0 && fraction[1] % i === 0) {
    	result.push(fraction[0] / i)
    	result.push(fraction[1] / i)
      return result
    }
  }
}

console.log(reduce([60, 20]))
// [3, 1]
console.log(reduce([80, 120]))
// [2, 3]
console.log(reduce([4, 2]))
// [2, 1]
console.log(reduce([45, 120]))
// [3, 8]
console.log(reduce([1000, 1]))
// [1000, 1]
console.log(reduce([1, 1]))
// [1, 1]]