// Given an array of integers and an integer n, find all occurrences of n in the given array and 
// return another array containing all the index positions of n in the given array.

// If n is not in the given array, return an empty array [].

// Assume that n and all values in the given array will always be integers.


function findAll(arr, int) {
	return arr.map((e,i) => e === int ? i : '')
  					.filter(e => e !== '')
}

console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3))
// [2, 4]
console.log(findAll([10, 16, 20, 6, 14, 11, 20, 2, 17, 16, 14], 16))
// [1, 9]
console.log(findAll([20, 20, 10, 13, 15, 2, 7, 2, 20, 3, 18, 2, 3, 2, 16, 10, 9, 9, 7, 5, 15, 5], 20))
// [0, 1, 8]
console.log(findAll([20,26,7,37,22,14,34,38,30,23,28,16,31,24,27,39,2,16,11,9,18,8,16,37,36,6,39,3,5,12,30,13,9,12,4,10,14,23,16,11,12,15,15,16], 24))
// 13