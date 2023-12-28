// Write a function that reverses the bits in an integer.

// For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

// You can assume that the number is not negative.

function reverseBits(n) {
	n = n.toString(2).split('').reverse().join('')
	return parseInt(n, 2)
}

console.log(reverseBits(417))
// 267
console.log(reverseBits(267))
// 417
console.log(reverseBits(0))
// 0
console.log(reverseBits(2017))
// 1087
console.log(reverseBits(1023))
// 1023
console.log(reverseBits(1024))
// 1