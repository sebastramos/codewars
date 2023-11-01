// An element is leader if it is greater than The Sum all the elements to its right side.

// Given an array [] of integers,
// Find all the LEADERS in the array.

// Array size is at least 3.

// Array's numbers Will be mixture of positives, negatives and zeros

// Repetition of numbers in the array could occur.

// Returned Array should store the leading numbers in the same order in the original array.


function arrayLeaders(numbers) {
	let leaders = []
  
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > numbers.slice(i+1).reduce((a,b) => a + b,0)) {
      leaders.push(numbers[i])
    }
  }
  return leaders
}

console.log(arrayLeaders([1,2,3,4,0]))
// [4]
console.log(arrayLeaders([16,17,4,3,5,2]))
// [17,5,2]
console.log(arrayLeaders([-1,-29,-26,-2]))
// [-1]
console.log(arrayLeaders([-36,-12,-27]))
// [-36,-12]
console.log(arrayLeaders([5,-2,2]))
// [5,2]
console.log(arrayLeaders([0,-1,-29,3,2]))
// [0,-1,3,2]
