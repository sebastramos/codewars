// The museum of incredible dull things wants to get rid of some exhibitions. 
// Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. 
// She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Given an array of integers, remove the smallest value.
// Do not mutate the original array/list.
// => // If there are multiple elements with the same value, remove the one with a lower index.
// If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.


// Solution 1
function removeSmallest(numbers) {
// find lowest number
	let boring = Math.min(...numbers)
// find the first index that match the lowest number  
  let indexLowestNumber = numbers.findIndex(el => el === boring)	
//  filter the number that have not the same index number
  let filter = numbers.filter((el, index) => index !== indexLowestNumber);
	return filter
}

// Solution 2
function removeSmallest(numbers) {
let copy = [...numbers]
let smallest = Math.min(...numbers);
let smallestIdx = numbers.indexOf(smallest)
copy.splice(smallestIdx, 1)
return copy
}




console.log(removeSmallest([1,2,3,4,5]))
// [2,3,4,5]
console.log(removeSmallest([5,3,2,1,4]))
// [5,3,2,4]
console.log(removeSmallest([2,2,1,2,1]))
// [2,2,2,1]