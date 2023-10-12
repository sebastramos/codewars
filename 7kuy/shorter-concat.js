// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null

// If a and b have the same length treat a as the longer producing b+reverse(a)+b

// Solution 1
function shorter_reverse_longer(a,b){
	if (a.length === b.length) {
  	return b.concat(a.split('').reverse().join('')).concat(b)
    } else if(a.length < b.length) {
    return a.concat(b.split('').reverse().join('')).concat(a)
    } else if(a.length > b.length) {
    return b.concat(a.split('').reverse().join('')).concat(b)
  }
}

//Solution 2
function shorter_reverse_longer(a,b) {
  let longest = a.length >= b.length ? a : b;
  let shortest = a.length >= b.length ? b : a;
  return shortest + longest.split('').reverse().join('') + shortest;
}

console.log(shorter_reverse_longer("first", "abcde"))
// "abcdetsrifabcde"
console.log(shorter_reverse_longer("hello", "bau"))
// "bauollehbau"
console.log(shorter_reverse_longer("fghi", "abcde"))
// "fghiedcbafghi"