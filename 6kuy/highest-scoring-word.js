// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


function high(x){
// split each words into an array
  x = x.split(' ')
// create an array to store points
	let arr = []
// loop through each words
  for(let i = 0; i < x.length; i++) {
// for every work make the addition of points then push to the arr
		arr.push([...x[i]].map(e => e.charCodeAt() - 96).reduce((acc,curr) => acc + curr,0))
  }
// Declare and assign to a new variable, the index of the highest point words
	let highest = arr.indexOf(Math.max(...arr))
// use the highest variable to return the highest words in x
	return x[highest]
}

console.log(high('man i need a taxi up to ubud'))
// 'taxi'
console.log(high('what time are we climbing up the volcano'))
// 'volcano'
console.log(high('take me to semynak'))
// 'semynak'
console.log(high('aa b'))
// 'aa'
console.log(high('b aa'))
// 'b'
console.log(high('bb d')) 
// 'bb'
console.log(high('d bb')) 
// 'd'
console.log(high('aaa b')) 
// 'aaa' 