// Complete the function that takes an array of words.

// You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

// Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.

/* ["yoda", "best", "has"]
  ^        ^        ^
  n=0     n=1     n=2
*/  
// result => "yes"

 function nthChar(words){
	return words.map((e,i) => e[i]).join('')
}

console.log(nthChar([]))
// ''
console.log(nthChar(['yoda', 'best', 'has']))
// 'yes'