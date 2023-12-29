// Using n as a parameter in the function pattern, 
// where n > 0, complete the codes to get the pattern (take the help of examples):

// Note: There is no newline in the end (after the pattern ends)

// Examples
// pattern(3) should return "1\n1*2\n1**3", e.g. the following:

/* 
1
1*2
1**3
pattern(10): should return the following:

1
1*2
1**3
1***4
1****5
1*****6
1******7
1*******8
1********9
1*********10 
*/

// Solution 1
function pattern(n) {
	let result = ''
	for(let i = 1; i <= n; i++) {
  	if(i === 1) {
    	result += 1 + '\n'
    } else if (i < n) {
    	result += 1 + '*'.repeat(i - 1) + i + '\n'
    } else {
    	result += 1 + '*'.repeat(i - 1) + i
    }
  }
  return result
}

// Solution 2
function pattern(n){
	let result = '1'
	for(let i = 2; i <= n; i++){
	  result += '\n1' + '*'.repeat(i-1) + i
	}
  return result
}

console.log(pattern(3))
// "1\n1*2\n1**3"
console.log(pattern(7))
// "1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7"
console.log(pattern(20))
// "1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7\n1*******8\n1********9\n
// 1*********10\n1**********11\n1***********12\n1************13\n1*************14\n
// 1**************15\n1***************16\n1****************17\n1*****************18\n1******************19\n1*******************20"