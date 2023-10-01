// Write a function that flattens an Array of Array objects into a flat Array.
// Your function must only do one level of flattening.

const flatten = function (array){
  return array.flat();
} 

console.log(flatten([1,2,3]))
// [1,2,3]
console.log(flatten([[1,2,3],["a","b","c"],[1,2,3]]))
// [1,2,3,"a","b","c",1,2,3]
console.log(flatten([[[1,2,3]]]))
// [[1,2,3]]
