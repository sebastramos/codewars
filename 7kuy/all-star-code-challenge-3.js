// This Kata is intended as a small challenge for my students

// Create a function that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

function remove_vowels(str) {
	let vowels = 'aeiou'
	return str.split('').filter(e => !vowels.includes(e)).join('')
}

console.log(remove_vowels("drake"))
// "drk"
console.log(remove_vowels("aeiou"))
// ""