// Write a function to greet a person.
// Function will take name as input and greet the person by saying hello.
// Return null if input is empty string or null.

function greet(name) {
	return name === '' || name === null ? null : `hello ${name}!`
}

console.log(greet("Niks"))
// "hello Niks!"
console.log(greet(""))
// Return null if input is empty string
console.log(greet(null))
// Return null if input is null