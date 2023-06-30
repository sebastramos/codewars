// You are given an array with positive numbers and a non-negative number N.

// You should find the N-th power of the element in the array with the index N.

// If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

function index(array, n){
	return array[n] === undefined ? -1 : array[n] ** n 
}

console.log(index([1, 2, 3, 4], 2))
// 9
console.log(index([1, 3, 10 , 100], 3))
// 1000000
console.log(index([1, 2], 3))
// -1
console.log(index([1,1,1,1,1,1,1,1,1,1], 9))
// 1
console.log(index([1,1,1,1,1,1,1,1,1,2], 9))
// 512