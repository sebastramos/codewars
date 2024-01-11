// Write a function that doubles every second integer in a list, starting from the left.

// Solution 1
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

// Solution 2
function doubleEveryOther(a) {
	for(let i = 1; i < a.length; i += 2) {
	  a[i] *= 2
	}
	return a
}

console.log(doubleEveryOther([1,2,3,4]))
// [1,4,3,8]

console.log(doubleEveryOther([-10,7,-10,2,-7,-7,-7,6,-11,0]))
