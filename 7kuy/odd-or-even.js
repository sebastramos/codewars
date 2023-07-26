// Given a list of integers,
// determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).


function oddOrEven(array) {
	let result = array.reduce((a,b) => a + b, 0)
	return result % 2 === 0 ? 'even' : 'odd'
}

console.log(oddOrEven([0]))
// "even"

console.log(oddOrEven([0, 1, 4]))
// "odd"

console.log(oddOrEven([0, -1, -5]))
// "even"

// Have fun!