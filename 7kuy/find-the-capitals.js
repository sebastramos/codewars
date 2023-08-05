// Write a function that takes a single string (word) as argument.
// The function must return an ordered list containing the indexes of all capital letters in the string.

// Solution 1
let capitals = function (word) {
	word = word.split('')
  let upperCase = []
  
  
  for(let i = 0; i < word.length; i++) {
		if(word[i] !== word[i].toLowerCase()) {
    	upperCase.push(word.indexOf(word[i]))
    }
  }
	return upperCase
}


console.log(capitals("CodEWaRs"))
// [0,3,4,6]