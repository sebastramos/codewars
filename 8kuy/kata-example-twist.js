// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites 1,000 times.

// add the value "codewars" to the websites array 1,000 times

// Solution 1
let websites = []
let i = 1

do {
	websites.push('codewars')
} while (websites.length < 1000) 

console.log(websites)

// Solution 2
let websites2 = new Array(1000).fill('codewars')
console.log(website2)

