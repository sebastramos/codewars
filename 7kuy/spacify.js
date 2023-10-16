// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// Solution 1
function spacify(str) {
	let spacing = ''
  for(let letter of str) {
  	spacing += letter + ' '
  }
  return spacing.trim()
}

// Solution 2
function spacify(str) {
	return str.split('').join(' ')
}

// Solution 3
function spacify(str) {
	return [...str].join(' ')
}

console.log(spacify("hello world"))
// "h e l l o   w o r l d"