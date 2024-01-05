// Bob is a lazy man.

// He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

function countLettersAndDigits(input) {
	let letter = input.split('')
  					  .map(e => e.toLowerCase())
  					  .map(e => e.charCodeAt() - 96)
					  .filter(n => n > 0 && n < 27)
      				  .length
                    
	let number = input.replaceAll(' ', '')
                      .split('')
                      .filter(e => !Number.isNaN(+e))
                      .length
                    
	return letter + number
}

console.log(countLettersAndDigits("{y"))
// 1

/* console.log(countLettersAndDigits("hel2!lo"))
// 6
console.log(countLettersAndDigits("wicked .. !"))
// 6
console.log(countLettersAndDigits("!?..A"))
// 1 */