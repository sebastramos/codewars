// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// text before = "abc"
// character   = "z"
// text after  = "zzz"

function contamination(text, char){ 
 	let result = ''
 	for(let i = 0; i < text.length; i++) {
  	result += text[i] = char
  }
  return result
}

console.log(contamination("abc","z"))
// "zzz"
console.log(contamination("","z"))
// ""
console.log(contamination("abc",""))
// ""
console.log(contamination("_3ebzgh4","&"))
// "&&&&&&&&"
console.log(contamination("//case"," "))
// "      "