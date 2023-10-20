// Disarium number is the number that 
// The sum of its digits powered with their respective positions is equal to the number itself.

// Task
// Given a number, Find if it is Disarium or not.

// Notes
// Number passed is always Positive.
// Return the result as String


function disariumNumber(n) {
	let disariumTest = String(n).split('')
  														.map((el, index) => el ** (index + 1))
                              .reduce((acc, curr) => acc + curr)
                              
  if(disariumTest === n) {
  	return 'Disarium !!'
  } else {
  	return 'Not !!'
  }
}

console.log(disariumNumber(89))
// "Disarium !!"

console.log(disariumNumber(564))
// "Not !!"

