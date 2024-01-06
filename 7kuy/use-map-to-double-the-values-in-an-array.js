// Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array.
// Your solution must use the map() function of the built-in javascript Array object.
// If you're not familiar with map(), reading over the documentation may help.

function double(array) {
	return array.map(e => e * 2)
}

let someNumbers = [1,2,10,57];
console.log(double(someNumbers))
// [2,4,20,114]