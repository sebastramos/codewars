// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// a, e, i, o, u

// Solution 1
function replace(s){
  let a = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let arr = s.split('')
  for(let i = 0; i < arr.length; i++){
      if(a.includes(arr[i])){
           arr[i] = '!'
      }
  }
  return arr.join('')
}

// Solution 2
function replace(s){
	let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
  s = s.split('')
  
  for(let i = 0; i < s.length; i++) {
  	for(let j = 0; j < vowels.length; j++) {
    	if(s[i] === vowels[j]) {
      	s[i] = '!'
      }
    }
  }
  return s.join('')
}

// Solution 3
function replace (s) {
	return (s.split('').map(e => 'aeiou'.includes(e.toLowerCase()) ? '!' : e)).join('')
}

console.log(replace("Hi!"))
// "H!!"
console.log(replace("!Hi! Hi!"))
// "!H!! H!!"
console.log(replace("aeiou"))
// "!!!!!"
console.log(replace("ABCDE"))
// "!BCD!"


