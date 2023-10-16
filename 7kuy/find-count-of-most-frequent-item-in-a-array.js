// Complete the function to 
// find the count of the most frequent item of an array.
// You can assume that input is an array of integers.
// For an empty array return 0

// Solution 1
function mostFrequentItemCount(collection) {
	// check empty array
	if(collection.length === 0) {
  	return 0
  }
	// set an array with no repetition element
  let selection = collection.filter((items, index) => collection.indexOf(items) === index)
  
  // create a count array
  let countArr = []
  let count
  
  // will count for every array the number of time it appears 
  for(let i = 0; i < selection.length; i++) {
  	count = 0 // restart count 
  	for(let j = 0; j < collection.length; j++) {
    	if(selection[i] === collection[j])	{
      	count++
      }
    }
    // push to countArr when the search is done
    countArr.push(count)
  }
  // return the Max number
  return Math.max(...countArr)
}

// Solution 2
function mostFrequentItemCount(collection) {
  if (collection.length === 0) return 0
  
  var count = Object.create(null)
  
  collection.forEach( item => {
    count[item] = (count[item] || 0) + 1;
  })
  
  return Math.max(...Object.values(count))
}

console.log(mostFrequentItemCount([]))
// 0
console.log(mostFrequentItemCount([3, -1, -1]))
// 2
console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]))
// 5