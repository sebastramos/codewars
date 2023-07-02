// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut (string) {
	let str = ''
	for(let i = 0; i < string.length; i++) {
  	if(string[i] !== 'a' &&
    	 string[i] !== 'e' &&
       string[i] !== 'i' &&
       string[i] !== 'o' &&
       string[i] !== 'u') {
    	str += string[i]
    }
	}
  return str
}

console.log(shortcut("hello"))
// "hll"
console.log(shortcut("codewars"))
// "cdwrs"
console.log(shortcut("goodbye"))
// "gdby"
console.log(shortcut("HELLO"))
// "HELLO"

// don't worry about uppercase vowels
// y is not considered a vowel for this kata