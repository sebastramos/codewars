// Complete the function that accepts a string parameter,
// and reverses each word in the string. 
// All spaces in the string should be retained.


function reverseWords(str) {
// separate array
let word = str.split(' ')
let separate = [] 
 
 for(let i = 0; i < word.length; i++) {
		separate.push(String(word[i]).split('').reverse().join(''))
  }
  return separate.join(' ')
}


console.log(reverseWords("This is an example!"))
// "sihT si na !elpmaxe"
console.log(reverseWords("double  spaces"))
// "elbuod  secaps"