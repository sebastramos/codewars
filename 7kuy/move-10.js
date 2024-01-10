// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

function moveTen(s){
	s = s.split('').map(e => e.charCodeAt() - 96)
  
  let str = []
  for(let i = 0; i < s.length; i++) {
  	let forward = s[i] + 10
  	if(forward > 26) {
    	str.push(String.fromCharCode(forward - 26 + 96))
    } else {
    	str.push(String.fromCharCode(forward + 96))
    }
  }
  return str.join('')
}

console.log(moveTen("testcase"))
// "docdmkco"
console.log(moveTen("codewars"))
// "mynogkbc"
console.log(moveTen("exampletesthere"))
// "ohkwzvodocdrobo"