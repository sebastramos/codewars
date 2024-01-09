// Given two numbers x and n, calculate the (positive) nth root of x; 
// this means that being r = result, r^n = x

// 4 <= x < 10 ^ 20
// 4 <= n <= 50
// x = result
// n = root

function root(x, n) {
	return Math.pow(x, 1/n)
}

console.log(root(4, 2))
// 2
console.log(root(8, 3))
// 2
console.log(root(4, 2))
// 2
console.log(root(9, 2))
// 3
console.log(root(6.25, 2))
// 2.5