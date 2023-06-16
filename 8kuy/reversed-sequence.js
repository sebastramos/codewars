// Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = n => {
	let result = []
	for(let i = n; i > 0; i--) {
 		result.push(n--)
  }
  return result
}

console.log(reverseSeq(5))
//[5,4,3,2,1]

