// A Tidy number is a number whose digits are in non-decreasing order.

// Task
// Given a number, Find if it is Tidy or not .

// Notes
// Number passed is always Positive .

// Return the result as a Boolean

function tidyNumber(n){
	let sort = String(n).split('').sort((a,b)=> a - b).join('')
  return String(n) === sort ? true : false
}

console.log(tidyNumber(12))
// true
console.log(tidyNumber(102))
// false
console.log(tidyNumber(9672))
// false
console.log(tidyNumber(2789))
// true
console.log(tidyNumber(2335))
// true
