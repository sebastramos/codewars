// Given a varying number of integer arguments, 
// return the digits that are not present in any of them.

// Note: the digits in the resulting string should be sorted.

function unusedDigits() {
	let arg = [...arguments].flat().join('').split('').map(e => +e)
  let num = [0, 1, 2, 3, 4, 5, 6, 7 ,8, 9]
  
	return num.filter(e => !arg.includes(e)).join('')
}

console.log(unusedDigits([12, 34, 56, 78]))
// "09"
console.log(unusedDigits([2015, 8, 26]))
// "3479"
