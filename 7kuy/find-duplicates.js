// Given an array, find the duplicates in that array, and return a new array of those duplicates.
// The elements of the returned array should appear in the order when they first appeared as duplicates.

// Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

// Solution 1
function duplicates(arr) {
	let noDuplicate = []	
  let duplicate = []	
  for(let i = 0; i < arr.length; i++) {
  	if(noDuplicate.includes(arr[i])) {
    	duplicate.push(arr[i])
    } else {
      noDuplicate.push(arr[i])
    }
  }
  return duplicate.filter((a, i) => duplicate.indexOf(a) === i)
}

// Solution 2
function duplicates(arr) {
	let result = arr.filter((e,i) => arr.indexOf(e) !== i)
  return result.filter((e,i) => result.indexOf(e) === i)
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]))
// [4, 3, 1]
console.log(duplicates([0, 1, 2, 3, 4, 5]))
// []