// Write a function insertDash(num) that will insert dashes ('-') between each two odd digits in num. 
// For example: if num is 454793 the output should be 4547-9-3.

// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
	num = String(num)
  let finalNumber = ''
  
	for(let i = 0; i < num.length; i++) {
  	if(num[i] % 2 !== 0 && num[i + 1] % 2 !== 0 && num[i + 1] !== undefined) {
    	finalNumber += num[i] + '-'
    } else {
    	finalNumber += num[i]
    }
  }
  return finalNumber
}

console.log(insertDash(454793))
// '4547-9-3'
console.log(insertDash(123456))
// '123456'
console.log(insertDash(1003567))
// '1003-567'