// In this Kata the aim is to compare each pair of integers from 2 arrays, 
// and return a new array of large numbers.

// Note: Both arrays have the same dimensions.

function getLargerNumbers(arr1, arr2) {
	return arr1.map((e,i) => e > arr2[i] ? e : arr2[i])
}


let arr1 = [13, 64, 15, 17, 88]
let arr2 = [23, 14, 53, 17, 80]


console.log(getLargerNumbers(arr1, arr2))
// [23, 64, 53, 17, 88]

