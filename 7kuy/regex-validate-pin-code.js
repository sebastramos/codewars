// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// My solution without using Regex
function validatePIN (pin) {
	let result = pin.trim().split('').map(el => Number(el)).filter(el => el === Number(el))
  return pin.length === 4 && result.length === 4 || pin.length === 6 && result.length === 6 ? true : false
}

console.log(validatePIN("1234"))
// true
console.log(validatePIN("12345"))
// false
console.log(validatePIN("a234"))
// false
console.log(validatePIN("6408"))
// true
console.log(validatePIN("123 "))
// false

