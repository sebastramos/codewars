// The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

// [This is writen in pseudocode]
// if(number is even) number = number / 2
// if(number is odd) number = 3*number + 1
// #Task

// Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

// Solution 1
function hotpo(n) {
	let number = n
  let count = 0
	while (number !== 1) {
  	if(number % 2 === 0) {
    	number = number / 2
    } else {
    	number = 3 * number + 1
    }
    count++
  }
  return count
}

// Solution 2
let hotpo = (n, acc = 0) => {
  if (n <= 1) {
    return acc;
  } else {
    return hotpo(n%2===0 ? n/2 : 3*n+1, acc+1);
  }
}

console.log(hotpo(1))
// 0
// (1 is already 1)

console.log(hotpo(5))
// 5
// 5 -> 16 -> 8 -> 4 -> 2 -> 1

console.log(hotpo(6))
// 8
// 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

console.log(hotpo(23))
// 15
// 23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1