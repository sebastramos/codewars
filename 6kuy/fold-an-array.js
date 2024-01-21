// In this kata you have to write a method that folds a given array of integers by the middle x-times.

// An example says more than thousand words:

// Fold 1-times:
// [1,2,3,4,5] -> [6,6,3]

// A little visualization (NOT for the algorithm but for the idea of folding):

/* 
Step 1         Step 2        Step 3       Step 4       Step5
                     5/           5|         5\          
                    4/            4|          4\      
 1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
 ----*----      ----*          ----*        ----*        ----* 
 */
 
// Fold 2-times:
// [1,2,3,4,5] -> [9,6]
// As you see, if the count of numbers is odd, the middle number will stay.
// Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

// The array will always contain numbers and will never be null.
// The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

// If an array with one element is folded, it stays as the same array.

// The input array should not be modified!


// Solution 1
function foldArray(array, runs) {
  const result = []
  while (array.length) {
  	result.push(array.pop() + (array.shift() || 0))
  }
  return runs - 1 ? foldArray(result, runs - 1) : result
}

// Solution 2
function foldArray(array, runs) {
  let leftEnd = Math.floor(array.length / 2)
  let rightStart = Math.ceil(array.length / 2)

  let left = array.slice(0, leftEnd)
  let right = array.slice(rightStart).reverse()

  let result = left.map((val, index) => val + right[index])
  
  if (leftEnd !== rightStart) {
      result.push(array[leftEnd])
  }
  return runs === 1 ? result : foldArray(result, runs - 1)
}

console.log(foldArray([ 1, 2, 3, 4, 5 ], 1))
// [ 6, 6, 3 ]
console.log(foldArray([ 1, 2, 3, 4, 5 ], 2))
// [ 9, 6 ] 
console.log(foldArray([ 1, 2, 3, 4, 5 ], 3))
// [ 15 ]
console.log(foldArray([ -9, 9, -8, 8, 66, 23 ], 1))
// [ 14, 75, 0 ]  
