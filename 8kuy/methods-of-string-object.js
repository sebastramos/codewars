// Coding in function firstToLast, function accept 2 parameters: str and c.
// str is a string. 
// c is a char.

// Please return the gap between the first position of c and the last position of c.

// If there are a lot of c in the str, should return a positive integer; 
// If there is only one c in str, should return 0; 
// If there is no c in the str, should return -1. 
// Retrieval should not ignored the case.

function firstToLast(str, c) {
	let firstPosition = str.indexOf(c)
  let lastPosition = str.lastIndexOf(c)
  return firstPosition === -1 || lastPosition === -1 ? -1 : lastPosition - firstPosition
}

console.log(firstToLast("ababc","a"))
// 2(2-0)
console.log(firstToLast("ababc","c"))
// 0(4-4)
console.log(firstToLast("ababc","d"))
// -1
