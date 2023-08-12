// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')
// 'James Stevens'

function combineNames(name, familyName) {
	return `${name} ${familyName}`
}

 console.log(combineNames('James', 'Stevens'))

// Solution with one parameter

function combineNames(...names) {
	return names.join(' ')
}

console.log(combineNames('James', 'Stevens'))