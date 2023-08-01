// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.


// Solution 1
function alphabetPosition(text) {
	// split() to array
  text = text.toLowerCase().split('')
  
  // create obj alphabet
  let alphabet = {
  	'a': 1, 'b': 2, 'c': 3,
    'd': 4, 'e': 5, 'f': 6,
    'g': 7, 'h': 8, 'i': 9,
    'j': 10, 'k': 11, 'l': 12,
    'm': 13, 'n': 14, 'o': 15,
    'p': 16, 'q': 17, 'r': 18,
    's': 19, 't': 20, 'u': 21,
    'v': 22, 'w': 23, 'x': 24,
    'y': 25, 'z': 26
  }

  // let position
  let position = []
  
  // loop until the end of the array 
  // check every element if Number(element) === NaN 
  for(let i = 0; i < text.length; i++ ) {
  	if (isNaN(Number(text[i]))) {
    	if (alphabet.hasOwnProperty(text[i])) {
      	console.log(text[i])
      	position.push(alphabet[text[i]])
      }  
    }  
  }
  return position.join(' ')
}


// Solution 2
function alphabetPosition(text) {
  return text.toLowerCase().split('').map(a => a.charCodeAt(0) - 96).filter(a => a > 0 && a < 27).join(' ');
}


console.log(alphabetPosition("The sunset sets at twelve o' clock."))
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"