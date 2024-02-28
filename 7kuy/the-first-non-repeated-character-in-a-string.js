// You need to write a function, that returns the first non-repeated character in the given string.

// If all the characters are unique, return the first character of the string.
// If there is no unique character, return null.

// You can assume, that the input string has always non-zero length.

function firstNonRepeated(s) {
  for(let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return s[i]
    }
  }
  return null
}

console.log(firstNonRepeated("test"))
// "e"
console.log(firstNonRepeated("teeter"))
// "r"
console.log(firstNonRepeated("trend"))
// returns "t" (all the characters are unique)
console.log(firstNonRepeated("aabbcc"))
// returns null (all the characters are repeated)