// Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.

// We translate the sentence into an alien language according to the following rules:

// Each word in the sentence is separated by spaces.
// The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized.

// A small hint: The first conversion of the entire string will make the code easier

function alienLanguage(str) {
	str = str.split(' ').map(e => e.toUpperCase())
	return str.map(e => e.split('').splice(0, e.length -1).join('') + e[e.length -1].toLowerCase()).join(' ')
}


console.log(alienLanguage("My name is John"))
// "My NAMe Is JOHn"
console.log(alienLanguage("this is an example"))
// "THIs Is An EXAMPLe"
console.log(alienLanguage("Hello World"))
// "HELLo WORLd"

