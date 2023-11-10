// You are provided with an array of positive integers and an additional integer n (n > 1).

// Calculate the sum of each value in the array to the nth power.
// Then subtract the sum of the original array.

function modifiedSum(a, n) {
	return a.map(el => Math.pow(el, n)).reduce((acc, curr) => acc + curr, 0) - a.reduce((acc, curr) => acc + curr, 0)
}

console.log(modifiedSum([1, 2, 3], 3))
// 30
console.log(modifiedSum([1, 2], 5))
// 30