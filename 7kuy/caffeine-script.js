// Complete the function which takes a non-zero integer as its argument.

// If the integer is divisible by 3, 
// return the string "Java".

// If the integer is divisible by 3 and divisible by 4, 
// return the string "Coffee"

// If one of the condition above is true and the integer is even,
// add "Script" to the end of the string.

// If none of the condition is true,
// return the string "mocha_missing!"

// Solution 1
function caffeineBuzz(n){
  let result = ''
  if(Number.isInteger(n / 3) && Number.isInteger(n / 4)) {
  	result += 'Coffee'
    if(n % 2 === 0) {
    	result += 'Script'
    }
  } else if(Number.isInteger(n / 3)) {
  	result += 'Java'
    if(n % 2 === 0) {
    	result += 'Script'
    }
  } else {
  	return "mocha_missing!"
  }
  return result
}

// Solution 2
function caffeineBuzz(n){
  return (n%3==0) ? ((n%4==0) ? "Coffee" : "Java") + ((n%2==0) ? "Script" : "") : "mocha_missing!";
}

console.log(caffeineBuzz(1))
// "mocha_missing!"
console.log(caffeineBuzz(3))
// "Java"
console.log(caffeineBuzz(6))
// "JavaScript"
console.log(caffeineBuzz(12))
// "CoffeeScript"