// Given an array of integers, 
// Find the minimum sum which is obtained 
// from summing each Two integers product

// Notes
// Array/list will contain positives only
// Array/list will always have even size

function minSum(arr) {
  arr.sort((a, b) => a - b)
     .reduce((pre, val) => pre + val * arr.pop(), 0)
}



console.log(minSum([5,4,2,3]))
// 22
console.log(minSum([12,6,10,26,3,24]))
// 342
console.log(minSum([9,2,8,7,5,4,0,6]))
// 74 