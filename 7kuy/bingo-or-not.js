// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input.
// Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc).
// Write a function where you will win the game if your numbers can spell "BINGO".
// They do not need to be in the right order in the input array. Otherwise you will lose.
// Your outputs should be "WIN" or "LOSE" respectively.

// Solution 1
function bingo(a) {
  let word = 'BINGO'.split('')
  let verify = ''
  
  a = a.map(e => String.fromCharCode(e + 96).toUpperCase())
  let filtered = a.filter((e,i) => a.indexOf(e) === i)
  
  for(let i = 0; i < filtered.length; i++) {
  	if(word.includes(filtered[i])) {
    	verify += filtered[i]
    }
  }
  
  return word.length === verify.length ? 'WIN' : 'LOSE'
}

// Solution 2
function bingo(a) {
  return [2,9,14,7,15].every(e => a.includes(e)) ? "WIN" : "LOSE"
}

console.log(bingo([1,2,3,4,5,6,7,8,9,10]))
// "LOSE"
console.log(bingo([21,13,2,7,5,14,7,15,9,10]))
// "WIN"