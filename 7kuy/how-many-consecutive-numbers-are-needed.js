// Write a function that takes an array of unique integers and
// returns the minimum number of integers needed to make the values of the array consecutive from the lowest number to the highest number.

// Example
// [4, 8, 6] --> 2
// Because 5 and 7 need to be added to have [4, 5, 6, 7, 8]

// [-1, -5] --> 3
// Because -2, -3, -4 need to be added to have [-5, -4, -3, -2, -1]

// [1] --> 0
// []  --> 0

// Solution 1
function consecutive(array) {
	let min = Math.min(...array)
	let max = Math.max(...array) 
  
  if(Math.abs(min) === Infinity && Math.abs(max) === Infinity) {
  	return 0
  } else {
  	let missNumbers = []
  	for(let i = min; i < max; i++) {
    	if(!array.includes(i)) {
      	missNumbers.push(i)
      }
    }
    return missNumbers.length
  }  
}

// Solution 2
function consecutive(arr){
    let l = arr.length
    return l ? Math.max(...arr) - Math.min(...arr) - l + 1 : 0
}


console.log(consecutive([4, 8, 6]))
// 2
console.log(consecutive([1, 2, 3, 4]))
// 0
console.log(consecutive([]))
// 0
console.log(consecutive([1]))
// 0