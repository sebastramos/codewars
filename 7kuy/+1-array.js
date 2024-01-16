// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.


function upArray(arr) {
    if (arr.length == 0 || arr.some(e => e < 0 || e > 9)) return null
    
    let i = arr.length - 1
    
    while (i >= 0 && arr[i] == 9)
      arr[i--] = 0
    
    if(i < 0) {
        arr.unshift(1)
    } else {
          arr[i]++
    }
  
    return arr
  }
  
  
  console.log(upArray([4,3,2,5]))
  // [4,3,2,6]
  console.log(upArray([2,3,9,9]))
  // [2,4,0,0]
  console.log(upArray([9,9]))
  // [1,0,0]
  console.log(upArray([0,7]))
  // [0,8]
  console.log(upArray([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]))
  // [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,1] 
  console.log(upArray([1,-9]))
  // null
  console.log(upArray([1,10]))
  // null