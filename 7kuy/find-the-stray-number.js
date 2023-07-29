// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

function stray(numbers) {
	let sortNum = numbers.sort()
  
  return sortNum[0] === sortNum[1] ? sortNum[sortNum.length-1] : sortNum[0]
}



console.log(stray([1, 1, 2]))
// 2
console.log(stray([17, 17, 3, 17, 17, 17, 17]))
// 3

console.log(1^2)