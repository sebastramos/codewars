// In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

// Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.
// All inputs will be lowercase letters.

// Solution 1
function solve(str) {
  str = str.split('')
  let order = str.map(e => e.charCodeAt() - 96).sort((a,b) => a - b)
  let check = []
	
  function alphabet() {
  	check.push(order.every(e => e > 0 && e < 27))
  }

  function consecutive() {
  	let verify = []
    for(let i = 1; i < order.length; i++) {
    	if(order[i] -1 === order[i-1]) {
      	verify.push(true)
      } else {
      	verify.push(false)
      }
    }
    check.push(verify.every(e => e === true))
  }
  
  function appearsOnce() {
  	let repeat = str.filter((e,i) => str.indexOf(e) === i)
    check.push(repeat.length === str.length ? true : false)
  }
  
  alphabet()
  consecutive()
  appearsOnce()
  return check.every(e => e === true)
}

// Solution 2
function solve(s) {
  return 'abcdefghijklmnopqrstuvwxyz'.includes([...s].sort().join(''))
}

console.log(solve("hmjiknlo"))
// True
console.log(solve("abc"))
//  True
console.log(solve("abd"))
// False
console.log(solve("dabc"))
// True
console.log(solve("abbc"))
// False
console.log(solve("v"))
// True