// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
	return array === null || array === undefined ? 0 : array.sort((a,b) => a - b).slice(1, - 1).reduce((acc, c) => acc + c, 0)
}


console.log(sumArray(null))
// 0
console.log(sumArray([]))
// 0
console.log(sumArray([6, 2, 1, 8, 10]))
// 16
console.log(sumArray([1, 1, 11, 2, 3]))
// 6