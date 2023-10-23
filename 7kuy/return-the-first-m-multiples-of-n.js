// Implement a function, multiples(m, n),
// which returns an array of the first m multiples of the real number n.
// Assume that m is a positive integer.


function multiples(m, n) {
	return Array(m).fill(n).map((el,i) => el * (i + 1))
}

console.log(multiples(3, 5.0))
// [5.0, 10.0, 15.0]