// Write a program that outputs the top n elements from a list.

function largest(n, arr) {
	return arr.sort((a,b)=> a - b).slice(arr.length - n)
}

console.log(largest(2, [7,6,5,4,3,2,1]))
// => [6,7]