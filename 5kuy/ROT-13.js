// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
// ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. 
// If there are numbers or special characters included in the string, they should be returned as they are.
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
  message = [...message]
  
  let cipher = ''
  for(let i = 0; i < message.length; i++) {
  	if(message[i].charCodeAt() < 65 || message[i].charCodeAt() > 90 &&
       message[i].charCodeAt() < 97 || message[i].charCodeAt() > 122) {

    	cipher += message[i]

  	} else if(message[i].toLowerCase() === message[i]) {
 			let letter = message[i].charCodeAt() + 13
      letter > 122 ? cipher += String.fromCharCode(letter - 26) : cipher += String.fromCharCode(letter)
      
    } else {
    	let letter = message[i].charCodeAt() + 13
      letter > 90 ? cipher += String.fromCharCode(letter - 26) : cipher += String.fromCharCode(letter)
    }
  }
  return cipher
} 

console.log(rot13("#!test[]"))
// "grfg"
console.log(rot13("Test"))
// "Grfg"