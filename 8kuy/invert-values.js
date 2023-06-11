// Given a set of numbers, return the additive inverse of each. 
// Each positive becomes negatives, and the negatives become positives.

function invert(array) {
  return array.map(arr => arr * -1) ;
}


console.log(invert([1,2,3,4,5]))
// [-1,-2,-3,-4,-5]
console.log(invert([1,-2,3,-4,5]))
// [-1,2,-3,4,-5]
console.log(invert([]))
// []