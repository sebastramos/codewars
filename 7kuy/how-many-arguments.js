// Write a function that returns the number of arguments it received.

function args_count() {
	return arguments.length
}

console.log(args_count())
// 0
console.log(args_count('A', 'B', 'C'))
// 3
console.log(args_count('a'))
// 1
console.log(args_count('a', 'b'))
// 2
console.log(args_count(['foo', 'bar']))
// 1