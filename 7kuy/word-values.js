// Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet,
// our string will have a value of 1 + 2 + 3 = 6. 
// This means that: a = 1, b = 2, c = 3 ....z = 26.

// You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list.

// For our purpose, position begins with 1.
// Input will only contain lowercase characters and spaces.

// Solution 1
let alphabet = {
  'a' : 1,  'b' : 2,  'c': 3,
  'd' : 4,  'e' : 5,  'f': 6,
  'g' : 7,  'h' : 8,  'i': 9,
  'j' : 10, 'k' : 11, 'l': 12,
  'm' : 13, 'n' : 14, 'o': 15,
  'p' : 16, 'q' : 17, 'r': 18,
  's' : 19, 't' : 20, 'u': 21,
  'v' : 22, 'w' : 23, 'x': 24,
  'y' : 25, 'z' : 26
}

function wordValue(a) {
let finalResult = []
let container = []

for(let i = 0; i < a.length; i++) {
  for(let j = 0; j < a[i].length; j++) {
    if(a[i][j] in alphabet) {
      container.push(alphabet[a[i][j]])
    }
  }
  finalResult.push(container.reduce((a,b) => a + b, 0))
  container = []
}
return finalResult.map((e,i) => e * (i + 1))
}

// Solution 2
function wordValue(a) {
	let result = []
	for(let i = 0; i < a.length; i++) {
  
  result.push(a[i].replaceAll(' ', '').split('').map(el => el.charCodeAt() - 96).reduce((a,b) => a + b,0))
  }

	return result.map((e,i) => e * (i + 1))
}

console.log(wordValue(["codewars","abc","xyz"]))
// [88,12,225]
console.log(wordValue(["abc abc","abc abc","abc","abc"]))
// [12,24,18,24]