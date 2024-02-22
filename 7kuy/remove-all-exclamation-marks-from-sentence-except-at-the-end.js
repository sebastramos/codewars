// Remove all exclamation marks from sentence except at the end.

// replaceAll '!', '' that are not on the last array
// loop when [i] !== '!' return str[i][j].slice(str[j]).join('')

function remove(string) {
	let str = string.split(' ')
  
  if(str.length < 2) {	
  	str = str.join('').split('')
    for(let i = 0; i < str.length; i++) {
    	if(str[i] !== '!') {
        return str.slice(i).join('')
      }
    }
  } else {
  	let first = str.splice(0, str.length -1).map(e => e.replaceAll('!', '')).join(' ')
  
   	let last = str[str.length - 1].split('')
   	for(let i = 0; i < last.length; i++) {
   		if(last[i] !== '!') {
   	  	return first + ' ' + last.slice(i).join('')
   	  }
   	}
  }
}

console.log(remove("Hi!"))
// "Hi!"
console.log(remove("Hi!!!"))
// "Hi!!!"
console.log(remove("!Hi"))
// "Hi"
console.log(remove("!Hi!"))
// "Hi!"
console.log(remove("Hi"))
// "Hi"
console.log(remove("Hi! Hi!"))
// "Hi Hi!"
