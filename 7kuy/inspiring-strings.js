// When given a string of space separated words, return the word with the longest length.
// If there are multiple words with the longest length, 
// return the last instance of the word with the longest length.

// Solution 1
function longestWord(str) {
	str = str.split(' ')
	let sizeWord = 0, word
  
  for(let i = 0; i < str.length; i++) {
  	if(str[i].length >= sizeWord) {
    	sizeWord = str[i].length
      word = str[i]
    }
  }
  return word
}

// Solution 2
function longestWord(str){
    return str.split(' ')
              .sort((b, a) => b.length - a.length)
              .pop()
  }

console.log(longestWord('red white blue')) 
// white
console.log(longestWord('red blue gold')) 
// gold