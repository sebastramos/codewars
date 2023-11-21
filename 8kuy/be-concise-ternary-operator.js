// Be Concise I - The Ternary Operator
// You are given a function describeAge that takes a parameter age (which will always be a positive integer) and does the following:

// If the age is 12 or lower, it return "You're a(n) kid"
// If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
// If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
// If the age is 65 or above, it return "You're a(n) elderly"

// Your task is to shorten the code as much as possible. 
// Note that submitting the given code will not work because there is a character limit of 137.

// I'll give you a few hints:

// The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!

// Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? 
// Perhaps we can shorten it?
// Write everything in one line, \n and other whitespaces counts.


// (Refactor the function)
function describeAge(age) {
	if(age <= 12) {
  	return "You're a(n) kid"
  } else if (age >= 13 && age <= 17) {
  	return "You're a(n) teenager"
  } else if (age >= 18 && age <= 64) {
  	return "You're a(n) adult"
  } else {
  	return "You're a(n) elderly"
  }
}

// Solution 1
function describeAge(age) {
let a="You're a(n) "
return age>64?a+"elderly":age>17?a+"adult":age>12?a+"teenager":a+"kid" 
}

console.log(describeAge(9))
// "You're a(n) kid"
console.log(describeAge(10))
// "You're a(n) kid"
console.log(describeAge(11))
// "You're a(n) kid"
console.log(describeAge(12))
// "You're a(n) kid"
console.log(describeAge(13))
// "You're a(n) teenager"
console.log(describeAge(14))
// "You're a(n) teenager"
console.log(describeAge(15))
// "You're a(n) teenager"
console.log(describeAge(16))
// "You're a(n) teenager"