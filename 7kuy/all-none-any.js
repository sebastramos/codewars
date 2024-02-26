// As a part of this Kata, you need to create three functions that one needs to be able to call upon an array:

// all

// This function returns true only if the predicate supplied returns true for all the items in the array [1, 2, 3].all(isGreaterThanZero) => true [-1, 0, 2].all(isGreaterThanZero) => false

// none

// This function returns true only if the predicate supplied returns false for all the items in the array [-1, 2, 3].none(isLessThanZero) => false [-1, -2, -3].none(isGreaterThanZero) => true

// any

// This function returns true if at least one of the items in the array returns true for the predicate supplied [-1, 2, 3].any(isGreaterThanZero) => true [-1, -2, -3].any(isGreaterThanZero) => false

// You do not need to worry about the data supplied, it will be an array at all times.

Array.prototype.all = function () {
	return this.every(e => e > 0)
}

Array.prototype.none = function () {
	return this.every(e => e < 0)
}

Array.prototype.any = function () {
	return this.some(e => e > 0)
}

console.log([1, 2, 3].all())
// true
console.log([-1, 0, 2].all())
// false
console.log([-1, 2, 3].none())
// false 
console.log([-1, -2, -3].none())
// true
console.log([-1, 2, 3].any())
// true 
console.log([-1, -2, -3].any()) 
// false

