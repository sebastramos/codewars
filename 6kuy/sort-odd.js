// You will be given an array of numbers. 
// You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Solution 1
function sortArray(array) {
	// declare a variable odd and assign array.filter(e => e % 2 !== 0) 
  // odd.sort((a,b) => a - b) the element in ascending order
  
  // declare an array result to countain the solution)
  // loop through the array parameter (let i = 0, index = 0; i < array.length; i++)
 		// if the element is % 2 !== 0 
    	// oddInAscendingOrder.push(odd[index])
      // count++
    // else
    	// oddInAscendingOrder.push(array[i])
  // return result
  
  let odd = array.filter(e => e % 2 !== 0).sort((a,b) => a - b)
  
  let oddInAscendingOrder = []
  
  for(let i = 0, index = 0; i < array.length; i++) {
  	if(array[i] % 2 !== 0) {
    	oddInAscendingOrder.push(odd[index])
      index++
    } else {
    	oddInAscendingOrder.push(array[i])
    }
  }
  return oddInAscendingOrder
}

// Solution 2
function sortArray(array) {
  const odd = array.filter((e) => e % 2).sort((a,b) => a - b)
  return array.map(e => e % 2 ? odd.shift() : e) 
  // shift will remove the first element in array then return it
}

console.log(sortArray([7, 1]))
// [1, 7]
console.log(sortArray([5, 8, 6, 3, 4]))
// [3, 8, 6, 5, 4]
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))
// [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]