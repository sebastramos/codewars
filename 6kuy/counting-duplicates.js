//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// toLowerCase()
// filter
// 

function duplicateCount(text){
	text = text.toLowerCase().split('')
 	
  let check = text.filter((item, index) => text.indexOf(item) !== index)
  return check.filter((item, index) => check.indexOf(item) === index).length
}

console.log(duplicateCount("abcde"))
// 0
console.log(duplicateCount("aabbcde"))
// 2
console.log(duplicateCount("aabBcde"))
// 2
console.log(duplicateCount("indivisibility"))
// 1
console.log(duplicateCount("Indivisibilities"))
// 2
console.log(duplicateCount("aA11"))
// 2
console.log(duplicateCount("ABBA"))
// 2