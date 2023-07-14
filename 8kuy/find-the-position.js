// When provided with a letter, return its position in the alphabet.

function position(letter){
	let alphabet = [ '', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
	return `Position of alphabet: ${alphabet.indexOf(letter)}`
}

console.log(position("a"))
// "Position of alphabet: 1"