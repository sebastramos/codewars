// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. 
// If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

function evenChars(string) {
	if(string.length < 2 || string.length > 100) {
  	return "invalid string"
  } else {
  	let odds = []
  	for(let i = 1; i < string.length+1; i++) {
    	if(i % 2 === 0) {
      	odds.push(string[i-1])
      }
    }
    return odds
  }
}


console.log(evenChars("abcdefghijklm")) 
// ["b", "d", "f", "h", "j", "l"]
console.log(evenChars("a"))
// "invalid string"