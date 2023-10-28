// Jumping number is the number that All adjacent digits in it differ by 1.

// Task
// Given a number, Find if it is Jumping or not.

// Notes
// Number passed is always Positive.

// Return the result as String.

// The difference between ‘9’ and ‘0’ is not considered as 1.

// All single digit numbers are considered as Jumping numbers.

function jumpingNumber(n) {
	n = String(n).split('')
  
  if(n.length === 1) {
  	return 'Jumping!!'
  } else {
  	let truth = []
  	for(let i = 0; i < n.length -1; i++) {
    	if(Number(n[i]) === Number(n[i+1]) + 1 ||
      	 Number(n[i]) === Number(n[i+1]) - 1) {
         		truth.push(true)
         } else {
         		truth.push(false)
         }
  	}
    return truth.every(el => el === true) ? 'Jumping!!' : 'Not!!'
  }
}

console.log(jumpingNumber(9))
// "Jumping!!"
console.log(jumpingNumber(79))
// "Not!!"
console.log(jumpingNumber(23))
// "Jumping!!"
console.log(jumpingNumber(556847))
// "Not!!"
console.log(jumpingNumber(4343456))
// "Jumping!!"
console.log(jumpingNumber(89098))
// "Not!!" */
console.log(jumpingNumber(32))
// "Jumping!!"