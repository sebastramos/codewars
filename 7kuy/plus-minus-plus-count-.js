// Count how often sign changes in array.

// number from 0 to ... . Empty array returns 0

// const arr = [1, -3, -4, 0, 5]

/*
| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |
*/

// catchSignChange(arr) == 2

function catchSignChange(arr) {
	let count = 0
	for(let i = 1; i < arr.length; i++) {
  	if(arr[i] >= 0 && arr[i-1] < 0) {
    	count++
    } else if(arr[i] < 0 && arr[i-1] >= 0) {
    	count++
    }
  }
  return count
}

console.log(catchSignChange([]))
// 0
console.log(catchSignChange([1,3,4,5]))
// 0
console.log(catchSignChange([-1,-3,-4,-5]))
// 0
console.log(catchSignChange([1,-3,-4,0,5]))
// 2
console.log(catchSignChange([-47,84,-30,-11,-5,74,77]))
// 3