// You receive some random elements as a space-delimited string. 
// Check if the elements are part of an ascending sequence of integers starting with 1, with an increment of 1 (e.g. 1, 2, 3, 4).

// Return:

// 0 if the elements can form such a sequence, and no number is missing ("not broken", e.g. "1 2 4 3")
// 1 if there are any non-numeric elements in the input ("invalid", e.g. "1 2 a")
// n if the elements are part of such a sequence, but some numbers are missing, and n is the lowest of them ("broken", e.g. "1 2 4" or "1 5")

// .split(' ')
// sort((a,b) => a - b)

function findMissingNumber(sequence){
	if(sequence === '') {
  	return 0
	}

	sequence = sequence.split(' ').sort((a,b) => a - b).map(e => +e)
  
	if(sequence.some(e => isNaN(e))) {
  	return 1
  } else if(sequence[0] !== 1) {
		return 1
	} else {
  	let missingNum = 0
  	for(let i = 1; i < sequence.length; i++) {
    	if(sequence[i] === sequence[i - 1] +1) {
      	continue
      } else if (sequence[i] !== sequence[i - 1]) {
      	missingNum = sequence[i -1] + 1
      }
    }
    return missingNum
  }
}

console.log(findMissingNumber("1 2 3 5"))
// 4,"It must work for missing middle terms"
console.log(findMissingNumber("1 3"))
// 2,"It must work for missing middle terms"
console.log(findMissingNumber("1 5"))
// 2,"It must work for missing more than one number" 
console.log(findMissingNumber(""))
// 0,"It must return 0 for an empty sequence"
console.log(findMissingNumber("1 2 3 4 5"))
// 0,"It must return 0 if no number is missing"
console.log(findMissingNumber("2 3 4 5"))
// 1,"It must return 1 for a sequence missing the first element"
console.log(findMissingNumber("2 6 4 5 3"))
// 1,"It must work for a shuffled input"
console.log(findMissingNumber("2 1 4 3 a"))
// 1,"It must return 1 for an invalid sequence"