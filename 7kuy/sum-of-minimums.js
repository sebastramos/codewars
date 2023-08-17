// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.


// [ [ 1, 2, 3, 4, 5 ], [ 5, 6, 7, 8, 9 ],[ 20, 21, 34, 56, 100 ]]

// So the function should return 26 because the sum of the minimums is
// 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

function sumOfMinimums(arr) {
	return arr.map(n => Math.min(...n)).reduce((a,b) => a + b)
}

sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])
// 9