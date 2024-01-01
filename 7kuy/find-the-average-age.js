// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// write a function that returns the average age of developers (rounded to the nearest integer).

// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer.

function getAverageAge(list) {
	let age = []
  
  for(let i = 0; i < list.length; i++) {
  	age.push(list[i].age)
  }
  return Math.round(age.reduce((a,b) => a + b, 0) / age.length)
}

let list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
]

console.log(getAverageAge(list1))
// 50


let list2 = [
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 20, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 21, language: 'C' },
]

console.log(getAverageAge(list2))
// 21