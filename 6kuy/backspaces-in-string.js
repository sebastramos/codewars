// Assume "#" is like a backspace in string.
// This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Solution 1
function cleanString(s) {
  let container = []
	for(let i= 0; i < s.length; i++) {
  	if(s[i] !== '#') {
    	container.push(s[i])
    } else {
    	container.pop()
    }
  }
  return container.join('')
}

// Solution 2
function cleanString(s) {
  let result = []
  [...s].map((char) => (char === "#" ? result.pop() : result.push(char)))
  return result.join("")
}

console.log(cleanString("abc#d##c"))
// "ac"
console.log(cleanString("abc##d######"))
// ""
console.log(cleanString("#######"))
// ""
console.log(cleanString(""))
// ""