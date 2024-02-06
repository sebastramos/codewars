// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// Zero alone is fine, don't worry about it.
// Poor guy anyway

// Solution 1
function noBoringZeros(n) {
  return n % 10 || n === 0 ? n : noBoringZeros(n / 10);
}

// Solution 2
function noBoringZeros(n) {
  let reverseNum = +(String(Math.abs(n)).split('').reverse().join('')) 
  let result = +(String(reverseNum).split('').reverse().join(''))
	return n < 0 ? -1 * result : result
}

console.log(noBoringZeros(1450))
// 145
console.log(noBoringZeros(960000))
// 96
console.log(noBoringZeros(1050))
// 105
console.log(noBoringZeros(-1050))
//-105
console.log(noBoringZeros(0))
// 0