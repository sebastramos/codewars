// Write a function that doubles every second integer in a list, starting from the left.

function doubleEveryOther(a) {
	let result = []
	for(let i = 0; i < a.length; i++) {
  	if(i % 2 !== 0) {
    	result.push(a[i] * 2)	
    } else {
    	result.push(a[i])
    }
  }
  return result
}

console.log(doubleEveryOther([1,2,3,4]))
// [1,4,3,8]

console.log(doubleEveryOther([-10,7,-10,2,-7,-7,-7,6,-11,0]))
