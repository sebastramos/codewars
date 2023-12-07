// Write a function that will accept two parameters: variable and type and check if type of variable is matching type. 
// Return true if types match or false if not.

function typeValidation(variable, type) {
	return typeof variable === type ? true : false
}

console.log(typeValidation(42, "number"))
// true
console.log(typeValidation("42", "number"))
// false