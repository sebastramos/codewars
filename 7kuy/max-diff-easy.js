// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted

function maxDiff(list) {
	list = list.sort((a,b)=> a - b)
  
  return list.length === 0 ? 0 : Math.max(...list) - Math.min(...list)
}

console.log(maxDiff([1, 2, 3, 4]))
//  returns 3 because 4 -   1  == 3
console.log(maxDiff([1, 2, 3, -4]))
//  returns 7 because 3 - (-4) == 7
console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]))
// 6
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]))
// 11
console.log(maxDiff([0, 1, 2, 3, 4, 5, 16]))
// 16
console.log(maxDiff([16]))
// 0
console.log(maxDiff([]))
// 0