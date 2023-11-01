// Given an array [] of integers, 
// Find The maximum difference between the successive elements in its sorted form.

// Array size is at least 3.

// Array's numbers Will be mixture of positives and negatives also zeros_

// Repetition of numbers in the array could occur.

// The Maximum Gap is computed Regardless the sign.

function maxGap(numbers) {
	let n = numbers.sort((a,b) => b - a)
	
  let diff = []
  for(let i = 0; i < n.length -1; i++) {
  	diff.push(n[i] - n[i + 1])
  }
  return Math.max(...diff)
}

console.log(maxGap([13,10,2,9,5]))
// 4
console.log(maxGap([13,3,5]))
// 8
console.log(maxGap([24,299,131,14,26,25]))
// 168
console.log(maxGap([-3,-27,-4,-2]))
// 23
console.log(maxGap([-7,-42,-809,-14,-12]))
// 767
console.log(maxGap([12,-5,-7,0,290]))
// 278
console.log(maxGap([-54,37,0,64,-15,640,0]))
// 576
console.log(maxGap([130,30,50]))
// 80
console.log(maxGap([1,1,1]))
// 0
console.log(maxGap([-1,-1,-1]))
// 0