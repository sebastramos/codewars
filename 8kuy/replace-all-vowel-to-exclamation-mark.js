// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// a, e, i, o, u
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

console.log(replace("Hi!"))
// "H!!"
console.log(replace("!Hi! Hi!"))
// "!H!! H!!"
console.log(replace("aeiou"))
// "!!!!!"
console.log(replace("ABCDE"))
// "!BCD!"


