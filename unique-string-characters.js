// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

// Notice also that you return the characters from the first string concatenated with those from the second string.

function solve(a, b) {
	let notCommonB = []
  let notCommonA = []
  
  for(let i = 0; i < a.length; i++) {
  	if (![...b].includes(a[i])) {
    	notCommonA.push(a[i])
    }
  }
  
  for(let i = 0; i < b.length; i++) {
  	if (![...a].includes(b[i])) {
    	notCommonB.push(b[i])
    }
  }
	return notCommonA.concat(notCommonB).join('')
}

console.log(solve("xyab","xzca"))
// "ybzc"
console.log(solve("xyabb","xzca"))
// "ybbzc"
console.log(solve("abcd","xyz"))
// "abcdxyz"
console.log(solve("xxx","xzca"))
// "zca"
