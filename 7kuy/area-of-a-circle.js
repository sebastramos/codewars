// Complete the function which will return the area of a circle with the given radius.

// Returned value is expected to be accurate up to tolerance of 0.01.

// If the radius is not positive, throw Error.

function circleArea(radius) {
	if (radius <= 0) {
  	throw new Error('Error')
  }
  return Math.PI * (radius ** 2)
}

console.log(circleArea(43.2673))
// returns 5881.248  (± 0.01)
console.log(circleArea(43.2673))
// returns 5881.248  (± 0.01)
console.log(circleArea(68))
// returns 14526.724 (± 0.01)
console.log(circleArea(0))
// throws Error
console.log(circleArea(-1))
// throws Error
