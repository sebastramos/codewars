// Write a function that returns true if the number is a "Very Even" number.

// If a number is a single digit, then it is simply "Very Even" if it itself is even.

// If it has 2 or more digits, it is "Very Even" if the sum of its digits is "Very Even".

// Note: The numbers will always be 0 or positive integers!

function isVeryEvenNumber(n) {
  if(String(n).length > 1) {
		while(String(n).length > 1) {
    	n = String(n).split('').map(e => +e).reduce((a,b) => a + b, 0) // number
    }
  	return n % 2 === 0
  } else {
  	return n % 2 === 0
  }
}

console.log(isVeryEvenNumber(12))
// false
console.log(isVeryEvenNumber(88))
// returns false
// 8 + 8 = 16 -> 1 + 6 = 7 => 7 
console.log(isVeryEvenNumber(222))
// true
// 2 + 2 + 2 = 6 => 6
console.log(isVeryEvenNumber(5))
// false
console.log(isVeryEvenNumber(841))
// true
// 8 + 4 + 1 = 13 -> 1 + 3 => 4