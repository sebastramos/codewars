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
function minimumSteps(numbers, value){
	return numbers.sort((a,b) => a - b, 0).filter((e,i) => value = value - e).length
}