// Implement a function which filters out array values which satisfy the given predicate.

function reject(arr, f) {
	return arr.filter(e => !f(e))
}

console.log(reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0))
// [1, 3, 5]