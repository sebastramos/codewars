// Your task is very simple. 
// Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.


function alphabetic(s) {
	const sort = s.split('').sort().join('')
  return sort === s
}

console.log(alphabetic("kata"))
// false
console.log(alphabetic("ant"))
// true
console.log(alphabetic("asd"))
// false
console.log(alphabetic("codewars"))
// false
console.log(alphabetic("door"))
// true
console.log(alphabetic("cell"))
// true
console.log(alphabetic("z"))
// true
console.log(alphabetic(""))
// true