// Write a function, factory, that takes a number as its parameter and returns another function.

// The returned function should take an array of numbers as its parameter, and return an array of those numbers multiplied by the number that was passed into the first function.

// In the example below, 5 is the number passed into the first function. 
// So it returns a function that takes an array and multiplies all elements in it by five.


function factory(x) {
	return array => array.map(e => e * x)
}

let myArray = [1, 2, 3]

let threes = factory(3)
console.log(threes(myArray))
// [3, 6, 9]

let fives = factory(5)
console.log(fives(myArray))
// [5, 10, 15]



