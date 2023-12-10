// Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing.
// The function should return either true or false (or the corresponding value in each language).

// For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces.
// Words can be any consecutive sequence of non space characters.
// Below are some examples of what the function should return:

/* 
* 'Hello world'   => true
* ' Hello world'  => false
* 'Hello world  ' => false
* 'Hello  world'  => false
* 'Hello'         => true

Even though there are no spaces, it is still valid because none are needed:
* 'Helloworld'    => true
* 'Helloworld '   => false
* ' '             => false
* ''              => true
*/

// Note - there will be no punctuation or digits in the input string, only letters.

function validSpacing(str) {
  if(str[0] === ' ' || str[str.length -1] === ' ') {
  	return false
  } 
  
  for(let i = 0; i < str.length; i++) {
  	if(str[i] === " " && str[i+1] === " ") {
    	return false
    }
  }
  return true
}

console.log(validSpacing( 'H  FLPv'))
// false
console.log(validSpacing('Hello world'))
// true
console.log(validSpacing(' Hello world'))
// false
console.log(validSpacing('Hello  world '))
// false
console.log(validSpacing('Hello'))
// true
console.log(validSpacing('Helloworld'))
// true 