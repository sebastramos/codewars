// Write a function that merges two sorted arrays into a single one.
// The arrays only contain integers. 
// Also, the final outcome must be sorted and not have any duplicate.

function mergeArrays(a, b) {
	let merge = [a, b].flat().sort((a,b) => a - b)
  let sort = merge.filter((e,i) => merge.indexOf(e) === i)
  return sort
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6]))
// [1, 2, 3, 4, 5, 6]
console.log(mergeArrays([2, 4, 8], [2, 4, 6]))
// [2, 4, 6, 8]