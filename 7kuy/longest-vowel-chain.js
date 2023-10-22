// The vowel substrings in the word codewarriors are o,e,a,io. 
// The longest of these has a length of 2.
// Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. 
// Vowels are any of aeiou.

function solve(s){
	s = s.split(/[^aeiou]/)
  return Math.max(...s.map(el => el.length))
}

console.log(solve("codewarriors"))
// 2
console.log(solve("suoidea"))
// 3
console.log(solve("ultrarevolutionariees"))
// 3
console.log(solve("strengthlessnesses"))
// 1
console.log(solve("cuboideonavicuare"))
// 2
console.log(solve("chrononhotonthuooaos"))
// 5
console.log(solve("iiihoovaeaaaoougjyaw"))
// 8