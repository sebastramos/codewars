// Strong number is the number that the sum of the factorial of its digits is equal to number itself.

// For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

// Notes
// Number passed is always Positive.
// Return the result as String

// 0! = 1
// 1! = 1

function strong_num(n) {
	n = String(n).split('')
  
  let result = []
  let finalResult = []
  
  for(let i = 0; i < n.length; i++) {
  	result = []	
    
  	for(let j = 0; j < n[i]; j++)  {
  		if(n[i] === 0) {
        result.push(1)
    	} else {
      	result.push(j+1)
      }
    }
    finalResult.push(result.reduce((a,b) => a * b, 1))
  }
  return +n.join('') === finalResult.reduce((a,b) => a + b) ? "STRONG!!!!" : "Not Strong !!"
}  
  

console.log(strong_num(1))
// "STRONG!!!!"
console.log(strong_num(123))
// "Not Strong !!"
console.log(strong_num(2))
// "STRONG!!!!"
console.log(strong_num(150))
// "Not Strong !!"