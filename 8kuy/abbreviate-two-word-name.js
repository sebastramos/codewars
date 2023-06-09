// Write a function to convert a name into initials.
// This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.


function abbrevName(name){
	let splitName = name.split(' ')
  splitName = splitName.map(character => character[0].toUpperCase())
  splitName = `${splitName[0][0]}.${splitName[1][0]}`
  return splitName
}

console.log(abbrevName('Sam Harris'))
console.log(abbrevName('patrick feeney'))