// Given an array of N integers, 
// you have to find how many times you have to add up the smallest numbers in the array 
// until their Sum becomes greater or equal to K.

// List size is at least 3.

// All numbers will be positive.

// Numbers could occur more than once , (Duplications may exist).

// Threshold K will always be reachable.

// Solution 1
function minimumSteps(numbers, value){
	const nums = numbers.sort((a,b) => a - b, 0)
  
  for(let i = 0, sum = 0; i < nums.length; i++) {
  	sum += nums[i]
    if(sum >= value) {
    	return i
    }
  }
}

// Solution 2
const minimumSteps = (numbers, value) => {
  let sum = 0
  return numbers.sort((a, b) => a - b).findIndex(number => (sum += number) >= value)
}

console.log(minimumSteps([4,6,3], 7))
// 1
console.log(minimumSteps([10,9,9,8], 17))
// 1
console.log(minimumSteps([8,9,10,4,2], 23))
// 3
console.log(minimumSteps([19,98,69,28,75,45,17,98,67], 464))
// 8
console.log(minimumSteps([4,6,3], 2))
// 0 