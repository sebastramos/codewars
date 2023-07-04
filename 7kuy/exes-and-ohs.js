// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.
// The string can contain any char.

// Solution 1
function XO(str) {
	let countO = 0
  let countX = 0
  
  str = str.toLowerCase()
  
  for(let i = 0; i < str.length; i++) {
  	if (str[i] === 'o') {
    	countO++
    } else if (str[i] === 'x') {
    	countX++
    } 
    
  }
  return countO === countX ? true : false
}


// Solution 2
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

console.log(XO("ooxx"))
// true
console.log(XO("xooxx"))
// false
console.log(XO("ooxXm"))
// true
console.log(XO("zpzpzpp"))
// true // when no 'x' and 'o' is present should return true
console.log(XO("zzoo"))
// false