// Write a function that takes an array of numbers (integers for the tests) and a target number. 
// It should find two different items in the array that, when added together, give the target value.
// The indices of these items should then be returned in a list like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

function twoSum(arr, targetNum) {
	for(let i = 0; i < arr.length; i++) {
		for(let j = i + 1; j < arr.length; j++) {
  		if(arr[i] + arr[j] === targetNum) {
    		return [arr.indexOf(arr[i]), arr.lastIndexOf(arr[j])]
    	}
  	}
	}
}

console.log(twoSum([1, 2, 3], 4))
// [0, 2]
console.log(twoSum([1234, 5678, 9012], 14690))
// [1, 2]
console.log(twoSum([2, 2, 3], 4))
// [0, 1]
console.log(twoSum([2, 3, 1], 3))
// [0, 2]