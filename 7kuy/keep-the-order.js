// Your job here is to write a function, which takes a sorted array 'ary' and a value 'val',
// and returns the lowest index where you could insert val to maintain the sorted-ness of the array.
// The input array will always be sorted in ascending order. 
// It may contain duplicates.

// Do not modify the input.

// Solution 1
function keepOrder(ary, val) {
	return ary.filter(e => e < val).length
}

// Solution 2 
function keepOrder(ary, val) {
  let idx = ary.findIndex(x => val <= x)
  return idx < 0 ? ary.length : idx
}

console.log(keepOrder([-5, -5, -2, 0, 2, 5], 6))
// 6
console.log(keepOrder([1, 2, 3, 4, 7], 5))
// 4
console.log(keepOrder([1, 2, 3, 4, 7], 0))
// 0
console.log(keepOrder([1, 1, 2, 2, 2], 2))
// 2

