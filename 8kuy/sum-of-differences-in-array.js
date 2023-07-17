// Your task is to sum the differences between consecutive pairs in the array in descending order.

// If the array is empty or the array has only one element the result should be 0


// Solution 1
function sumOfDifferences(arr) {

let order = arr.sort((a,b) => b - a)
let result = []

	// empty === 0
	if (arr.length === 0 || arr.length === 1) {
		return 0
	} else {
  	// loop
    for (let i = 0; i < arr.length - 1; i++) {
    	// addition order[i] + order[i + 1] until one is undefined
    	result.push(order[i] - order[i + 1])
    }
	}
	return result.reduce((a,b) => a + b)
}


// Solution 2
const sumOfDifferences = arr => arr
  .sort((a, b) => b - a)
  .map((a, i) => a - arr[i + 1] || 0)
  .reduce((a, b) => a + b, 0);


console.log(sumOfDifferences([2, 1, 10]))
// 9
// In descending order: [10, 2, 1]
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

console.log(sumOfDifferences([7,1,-6,7]))
// 13
