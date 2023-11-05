// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram.
// Return True if it is, False if not. Ignore numbers and punctuation.

// Solution 1
function isPangram(string){
	string = string.toLowerCase().replaceAll(' ', '').split('')
  
  let verification = []
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  for(let i = 0; i < string.length; i++) {
  	if(alphabet.includes(string[i]))	{
    	verification.push(string[i])
    }
  }
  return verification.sort().filter((el, index) => verification.indexOf(el) === index).length === 26
}

// Solution 2
function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'.split('').every((el) => string.toLowerCase().includes(el));
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))
// true
console.log(isPangram("This is not a pangram."))
// false