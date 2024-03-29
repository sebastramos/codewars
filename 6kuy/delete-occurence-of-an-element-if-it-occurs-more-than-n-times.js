// Alice and Bob were on a holiday. 
// Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection.
// However, Charlie doesn't like these sessions, since the motif usually repeats.
//He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times.
// Luckily, Alice and Bob are able to encode the motif as a number.
// Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.

// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], 
// you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

// With list [20,37,20,21] and number 1
// the result would be [20,37,21].

// Solution 1
function deleteNth(arr,n){
  // filter elements that appears once
    let once = arr.filter((e, i) => arr.indexOf(e) === i)
  // then store them into a variable maxRepeat
    let maxRepeat = Array(n).fill(once).flat()
      
  // declare a variable for the final result
    let limitRepeat =  []
    
  // loop through the arr
    for(let i = 0; i < arr.length; i++) {
    // if it maxRepeat.include(arr[i])
      if(maxRepeat.includes(arr[i])) {
      // delete the first element in maxRepeat === arr[i] 
      // to be sure we only use the element certain amout of time (maxRepeat)
        delete maxRepeat[maxRepeat.indexOf(arr[i])]
        // then push the element that is includes to limitRepeat
         limitRepeat.push(arr[i]) 
      }
    }
    return limitRepeat
  }
  
  console.log(deleteNth([20,37,20,21], 1))
  // [20,37,21]
  console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3))
  // [1, 1, 3, 3, 7, 2, 2, 2]


// Solution 2
function deleteNth(arr,n){
  let new_arr = []
  // for element element check if new_arr as it < n time
  arr.forEach((e) => { 
    if (new_arr.filter(i => i === e).length < n){
    	// if true push to new_arr
      new_arr.push(e)
    }
  })
  return new_arr
}
