// You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array.

// sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
// sumSquares([7,3,9,6,5]) === 200
// sumSquares([11,13,15,18,2]) === 843
// Shorten the code such that it meets the requirements.

// Try researching about built-in Array methods; they may help shorten your code a lot

function sumSquares(arr) {
	return arr.map(e => Math.pow(e, 2)).reduce((a,b) => a + b, 0)
}

console.log(sumSquares([1,2,3,4,5]))
// 55
console.log(sumSquares([7,3,9,6,5]))
// 200
console.log(sumSquares([11,13,15,18,2]))
// 843
console.log(sumSquares([-5,-4,-3,-2,-1,0,1,2,3,4,5]))
// 110