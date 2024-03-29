// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0

function sameCase(a, b){
const regex = /a-zA-Z0-9/g
	if (a.toLowerCase() === a.toUpperCase()
  || b.toLowerCase() === b.toUpperCase()) {
  	return -1
  } else if (a === a.toLowerCase() && b === b.toLowerCase() 
  || a === a.toUpperCase() && b === b.toUpperCase()) {
  	return 1
  } else if (a === a.toLowerCase() && b === b.toUpperCase() 
   || a === a.toUpperCase() && b === b.toLowerCase()) {
   	return 0       
  }
}

console.log(sameCase('a', 'g'))
// 1
console.log(sameCase('A', 'C'))
// 1
console.log(sameCase('b', 'G'))
//  0
console.log(sameCase('B', 'g'))
// 0
console.log(sameCase('0', '?'))
// -1