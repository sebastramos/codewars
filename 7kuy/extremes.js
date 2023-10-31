// Given an array of numbers, return the difference between the largest and smallest values.

// The array will contain a minimum of two elements.
// Input data range guarantees that max-min will cause no integer overflow.

function betweenExtremes(numbers) {
	return Math.max(...numbers) - Math.min(...numbers)
}

console.log(betweenExtremes([21, 34, 54, 43, 26, 12]))
// 42
console.log(betweenExtremes([-1, -41, -77, -100]))
// 99