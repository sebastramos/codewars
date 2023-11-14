// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
// assign a variable 
	// loop through each character in the string
		// if a character !== character.toLowerCase()      
  	// add a space before him + the character
    
	let str = ''
  for(let i = 0; i < string.length; i++) {
  	if(string[i] !== string[i].toLowerCase()) {
    	str += ` ${string[i]}`
    } else {
    	str += string[i]
    }
  }
  return str
}

console.log(solution('camelCasing'))
// 'camel Casing'
console.log(solution('camelCasingTest'))
// 'camel Casing Test'
console.log(solution('identifier'))
// 'identifier'
console.log(solution(''))
// ''
