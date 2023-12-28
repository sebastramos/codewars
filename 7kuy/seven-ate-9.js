// Write a function that removes every lone 9 that is inbetween 7s.

// Solution 1
function sevenAte9(str) {
	let result = ''
  for(let i = 0; i < str.length; i++) { 	
  	if(str[i] === '9') {
  		if(str[i - 1] === '7' && str[i + 1] === '7') {
      	result += ''
      } else {
      	result += str[i]
      }
    } else {
    	result += str[i]
    }
  }
  return result
}

// Solution 2
function sevenAte9(str){
  while (true) {
    if(str.search('797') != -1) {
      str = str.replace('797', '77')
    } else {
      break
    }
  }
  return str
}

console.log(sevenAte9("79712312"))
// "7712312"
console.log(sevenAte9("79797"))
// "777"
console.log(sevenAte9('165561786121789797'))
// '16556178612178977'