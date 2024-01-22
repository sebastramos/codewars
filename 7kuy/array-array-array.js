// You are given an initial 2-value array (x). 
// You will use this to calculate a score.

// If both values in (x) are numbers, the score is the sum of the two.
// If only one is a number, the score is that number. 
// If neither is a number, return 'Void!'.

// Once you have your score, you must return an array of arrays.
// Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.


function explode(x){
	if(x.every(e => !isNaN(e))) {
  	let xLength = x.reduce((a, c) => a + c, 0)
    return Array(xLength).fill(x)
  } else if(x.some(e => !isNaN(e))) {
  	let xLength = Number(x.filter(e => !isNaN(e)))
    return Array(xLength).fill(x)
  } else {
    // else if(x.every(e => isNaN(e)))
  	return 'Void!'
  }
}

console.log(explode([9, 3]))
// [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]
console.log(explode(['a', 3]))
// [['a', 3], ['a', 3], ['a', 3]]
console.log(explode([6, 'c']))
// [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]
console.log(explode(['a', 'b']))
// 'Void!'
console.log(explode(["a", 0]))
// []