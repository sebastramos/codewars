// Your task is to find all the elements of an array that are non consecutive.

// A number is non consecutive if it is not exactly one larger than the previous element in the array.
// The first element gets a pass and is never considered non consecutive.

// Create a function named allNonConsecutive

// You should return the results as an array of objects with two values i: <the index of the non-consecutive number> and n: <the non-consecutive number>.

// If the whole array is consecutive or has one element then return an empty array.

// The array elements will all be numbers.
// The numbers will also all be unique and in ascending order.
// The numbers could be positive and/or negative and the gap could be larger than one.


function allNonConsecutive(arr) {
  let result = []
  for(let i = 1; i < arr.length; i++) {
  	if(arr[i] !== arr[i-1] +1) {
    	result.push({i : arr.indexOf(arr[i]), n: arr[i]})
    }
  }
  return result
}

console.log(allNonConsecutive([1,2,3,4,6,7,8,10]))
// [{i: 4, n:6}, {i: 7, n:10}]
console.log(allNonConsecutive([1,2,3,4,5,6,7,8,9,10]))
// []
console.log(allNonConsecutive([]))
// []