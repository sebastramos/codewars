// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

// Given a number, Find if it is Disarium or not.

// Number passed is always Positive.
// Return the result as String

function disariumNumber(n) {
	return [...String(n)].map((e,i) => e**(i+1)).reduce((a,b) => a + b, 0) === n ? 'Disarium !!' : 'Not !!'
}

console.log(disariumNumber(89))
// "Disarium !!"
// Since , 8^1 + 9^2 = 89 , thus output is "Disarium !!"

console.log(disariumNumber(564))
// "Not !!"
// Since , 5^1 + 6^2 + 4^3 = 105 != 564 , thus output is "Not !!"