// Remove all exclamation marks from the end of words.
// Words are separated by a single space. 
// There are no exclamation marks within a word.

function remove(s){
	s = s.split(" ")
  
	for (let i = 0; i < s.length; i++) {
		while (s[i].slice(-1) === "!") {
			s[i] = s[i].slice(0, -1)
		}
	}
	s = s.join(" ")
	return s
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
// "Hi Hi"
console.log(remove("!!!Hi !!hi!!! !hi"))
// "!!!Hi !!hi !hi"
console.log(remove("!!!Ho !!ho!!! !ho"))
// "!!!Ho !!ho !ho"
console.log(remove("dsfmsu !!oaicq iwizb"))
// 'dsfmsu !!oaicq iwizb'