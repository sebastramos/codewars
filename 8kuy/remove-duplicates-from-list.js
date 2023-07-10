// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Solution 1
function distinct(a) {
  for(let i = 0; i < a.length; i++) {
    for(let j = i + 1; j < a.length; j++) {
      if(a[i] === a[j] )
        delete a[i]
    }
  }
  return a.filter(el => el !== undefined)
}
 
// Solution 2
function distinct(a) {
  return a.filter((item, index) => a.indexOf(item) === index)
}

console.log(distinct([1]))
// [1]
console.log(distinct([1,2]))
// [1,2]
console.log(distinct([1,1,2]))
// [1,2]
console.log(distinct([1,1,2,3,4,5,6,6,3,9,8,7,6,1]))
// [1,2]