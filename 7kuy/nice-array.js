// A Nice array is defined to be an array where for every value n in the array,
// there is also an element n - 1 or n + 1 in the array.

// Write a function named isNice that returns true if its array argument is a Nice array, else false.
// An empty array is not considered nice.

// Solution 1
function isNice(arr) {
	
  if(arr.length === 0) {
  	return false
  } else {
  	let niceArray = []
		for(let i = 0; i < arr.length; i++) {
  		for(let j = 0; j < arr.length; j++) {
    		if(arr[j] - 1 === arr[i] || arr[j] + 1 === arr[i]) {
     			niceArray.push('true')
        	break
      	}
    	}
  	}
  return niceArray.length === arr.length
  }
}

// Solution 2
const isNice = arr =>
  arr.length !== 0 && arr.every(val => arr.includes(val + 1) || arr.includes(val - 1))


console.log(isNice([2, 10, 9, 3]))
// true
console.log(isNice([4, 2, 3]))
// true
console.log(isNice([4, 2, 1]))
// false
console.log(isNice([3,4,5,7]))
// false
