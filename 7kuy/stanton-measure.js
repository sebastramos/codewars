// The Stanton measure of an array is computed as follows: 
// count the number of occurences for value 1 in the array.
// Let this count be n.

// The Stanton measure is the number of times that n appears in the array.

// Write a function which takes an integer array and returns its Stanton measure.

// The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.

// The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.

function stantonMeasure(n) {
	let check = n.filter(e => e === 1).length
  return n.filter(e => e === check).length
}

console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]))
// 3 
console.log(stantonMeasure([1, 4, 1, 2, 11, 2, 3, 1]))
// 1