// The bloody photocopier is broken... 
// Just as you were sneaking around the office to print off your favourite binary code!

// Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

// Given a string of binary, return the version the photocopier gives you as a string.

// Solution 1
function broken(binary) {
	let correction = ''
  
  for(let i = 0; i < binary.length; i++) {
  	if(binary[i] === '1') {
    	correction += '0'
    } else {
    	correction += '1'
    }
  }
  return correction
}

// Solution 2
function broken(binary){
  return binary.split('').map(a => a === "0" ? "1" : "0").join('')
}

console.log(broken("1"))
// "0"
console.log(broken("10000000101101111110011001000"))
// "01111111010010000001100110111"
console.log(broken("100010"))
// "011101"