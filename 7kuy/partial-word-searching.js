// Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization.
// Then return an array of the found strings.

// The method takes two parameters, the query string and the array of strings to search, and returns an array.

// If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty"

// If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].

function wordSearch(query, seq){
	query = query.split('').map(e => e.toLowerCase()).join('')
  let check = seq.map(e => e.split('').map(e => e.toLowerCase()).join(''))
  
  let result = []
  for(let i = 0; i < check.length; i++) {
  	if(check[i].includes(query)) {
    	result.push(seq[i])
    }	
  }
  return result.length === 0 ? ['Empty'] : result
}

console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]))
// ["ab", "abc", "zab"]
console.log(wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"]))
// ["ab", "abc", "zab"]
console.log(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]))
// ["aB", "Abc", "zAB"]
console.log(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]))
// ["Empty"]