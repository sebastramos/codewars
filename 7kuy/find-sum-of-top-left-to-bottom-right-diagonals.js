// Given a square matrix (i.e. an array of subarrays),
// find the sum of values from the first value of the first array,
// the second value of the second array,
// the third value of the third array, and so on...

// Solution 1
function diagonalSum(matrix){
	let sum = 0
	for(let i = 0; i < matrix.length; i++) {
  	sum += matrix[i][i]
  }
  return sum
}

// Solution 2
function diagonalSum(matrix){
    return matrix.reduce((acc,curr,arr) => acc + curr[arr], 0)
}

console.log(diagonalSum([[12]]))
// 12
console.log(diagonalSum([[1, 2], 
						 [3, 4]]))
// 5
console.log(diagonalSum([[1, 2, 3], 
						 [4, 5, 6], 
                         [7, 8, 9]]))
// 15
console.log(diagonalSum([[1, 2, 3, 4], 
						 [5, 6, 7, 8], 
                         [9, 10, 11, 12], 
                         [13, 14, 15, 16]]))
// 34