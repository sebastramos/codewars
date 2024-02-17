// The town sheriff dislikes odd numbers and wants all odd numbered families out of town!
// In town crowds can form and individuals are often mixed with other people and families.
// However you can distinguish the family they belong to by the number on the shirts they wear.
// As the sheriff's assistant it's your job to find all the odd numbered families and remove them from the town!

// Challenge: You are given a list of numbers.
// The numbers each repeat a certain number of times.
// Remove all numbers that repeat an odd number of times while keeping everything else the same.

// Solution 1 (don't keep the same order)*
function oddOnesOut(n) {
	let obj = {}
	for(let i = 0; i < n.length; i++) {
  	obj.hasOwnProperty(n[i]) ? obj[n[i]] += 1 : obj[n[i]] = 1
  }
  let even = []
  for(let number in obj) {
  	if(obj[number] % 2 === 0) {
    	even.push(Array(obj[number]).fill(number))
    }
  } 
  return even.flat().map(e => +e)
}

// will give the result but in a sorted order *
console.log(oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26]))
// [24, 24, 26, 26]




console.log(oddOnesOut([1, 2, 3, 1, 3, 3]))
// [1, 1]
console.log(oddOnesOut([1, 1, 2, 2, 3, 3, 3]))
// [1, 1, 2, 2]
console.log(oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26]))
// [26, 24, 24, 26]
console.log(oddOnesOut([1, 2, 3]))
// []
console.log(oddOnesOut([1]))
// []
console.log(oddOnesOut([75, 68, 75, 47, 68]))
// [75, 68, 75, 68]
console.log(oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67]))
// [67, 67]
console.log(oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100]))
// [100, 100, 100, 100]
console.log(oddOnesOut([82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50]))
// [44, 79, 50, 44, 79, 50]