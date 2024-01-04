// Your job is to implement a function which returns the last D digits of an integer N as a list.

// Special cases:
// If D > (the number of digits of N), return all the digits.
// If D <= 0, return an empty list.

function lastDigit(n, d) {
	if(d > n.length) {
  	return String(n).split('')
  }else if(d <= 0) {
  	return []
  }else {
  	return String(n).split('').map(e => +e).slice(-d)
  }
}

console.log(lastDigit(1,1))
// result = [1]
console.log(lastDigit(1234,2))
// result = [3, 4]
console.log(lastDigit(637547,6))
// result = [6, 3, 7, 5, 4, 7]