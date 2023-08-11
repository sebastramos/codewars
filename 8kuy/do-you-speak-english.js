// Given a string of arbitrary length with any ascii characters.
// Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

// Solution 1
function spEng(sentence){
	return sentence.length === sentence.toLowerCase().split('english').join('').length ? false : true
}

// Solution 2
function spEng(sentence){
	return sentence.toLowerCase().includes('english')
}

console.log(spEng("english"))
// true
console.log(spEng('abcEnglishdef'))
// true
console.log(spEng("egnlish"))
// false