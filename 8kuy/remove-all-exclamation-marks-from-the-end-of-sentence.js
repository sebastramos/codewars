// Remove all exclamation marks from the end of sentence.

function remove(str) {
	while (str.endsWith('!') === true) {
		str = str.slice(0, -1)
	}
  return str
}


console.log(remove("Hi!"))
// "Hi"
console.log(remove("Hi!!!"))
// "Hi"
console.log(remove("!Hi"))
// "!Hi"
console.log(remove("!Hi!"))
// "!Hi"
console.log(remove("Hi! Hi!"))
// "Hi! Hi"
console.log(remove("Hi"))
// "Hi"