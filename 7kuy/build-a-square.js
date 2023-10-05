// I will give you an integer.
// Give me back a shape that is as long and wide as the integer.
// The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

/* 
+++
+++
+++
*/

// Solution 1
function generateShape(integer){
	let result = ''
	for(let i = 0; i < integer; i++) {
  	if (i > 0) {
    	result += "\n"
    }
  	for(let j = 0; j < integer; j++) {
    	result += "+"
    }
  }
  return result
}

// Solution 2
function generateShape(integer) {
  return ("+".repeat(integer)+"\n").repeat(integer).trim()
}

console.log(generateShape(8))