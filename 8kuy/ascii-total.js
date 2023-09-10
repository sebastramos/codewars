// You'll be given a string, and have to return the sum of all characters as an int.

// The function should be able to handle all printable ASCII characters.

function uniTotal(string) {
	let result = 0
  
	string = string.split('')
  
  for(let i = 0; i < string.length; i++) {
  	result += string[i].charCodeAt()
  }
  return result
}

console.log(uniTotal("a"))
// 97
console.log(uniTotal("aaa"))
// 291
console.log(uniTotal("Mary Had A Little Lamb"))
// 1873