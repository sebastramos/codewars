// In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. 
// If there is no such letter in the string, then the function should return -1.
// If the letter occurs only once in the string, then -1 should also be returned.

function secondSymbol(str, l) {
	let result = str.includes(l) ? str.replace(l, '*') : -1
  return result === -1 ? -1 : result.indexOf(l)
}

console.log(secondSymbol('Hello world!!!','l'))
// 3
console.log(secondSymbol('Hello world!!!', 'A'))
// -1