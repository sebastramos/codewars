// A balanced number is
// a number where the sum of digits to the left of the middle digit(s) and 
// the sum of digits to the right of the middle digit(s) are equal.

// If the number has an odd number of digits,
// then there is only one middle digit. 
	// For example, 92645 has one middle digit, 6.
// Otherwise, there are two middle digits.
	// For example, the middle digits of 1301 are 3 and 0.

// The middle digit(s) should not be considered when determining whether a number is balanced or not, !!
	// 413023 is a balanced number because the left sum and right sum are both 5.


// Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly.
// The passed number will always be positive.


function balancedNum(n) {
  n = String(n)
  
  let leftSide = []
  let rightSide = []
  
  if(n.length <= 2 && n.length > 0) {
    return "Balanced"
   
  }else if(n.length % 2 === 0) {
    leftSide.push(n.slice(0 , (n.length / 2) -1))
   rightSide.push(n.slice((n.length / 2) + 1))
   
  } else if(n.length % 2 !== 0) {
    leftSide.push(n.slice(0 , Math.floor(n.length / 2)))
   rightSide.push(n.slice(Math.ceil(n.length / 2)))
  }
  
  let left = String(leftSide).split('').reduce((a,b) => +a + +b, 0)
  let right = String(rightSide).split('').reduce((a,b) => +a + +b, 0)
  
  return left === right ? "Balanced" : "Not Balanced"
 }
 
 
 console.log(balancedNum(7))
 // "Balanced"
 console.log(balancedNum(959))
 // "Balanced"
 console.log(balancedNum(13))
 // "Balanced"
 console.log(balancedNum(432))
 // "Not Balanced"
 console.log(balancedNum(424))
 // "Balanced"
 console.log(balancedNum(1024))
 // "Not Balanced"
 console.log(balancedNum(66545))
 // "Not Balanced"
 console.log(balancedNum(295591))
 // "Not Balanced"
 console.log(balancedNum(1230987))
 // "Not Balanced"
 console.log(balancedNum(56239814))
 // "Balanced" 