// An element in an array is dominant if it is greater than all elements to its right.
// You will be given an array and your task will be to return a list of all dominant elements.

// Notice that the last element is always included.
// All numbers will be greater than 0.

// Solution 1
function solve(arr) {
	let dominant = []
	for(let i = 0; i < arr.length; i++) {	
		if(arr.slice(i+1).every(e => e < arr[i])) {
			dominant.push(arr[i])
    }
  }
  return dominant
}

// Solution 2
function solve(arr) {
  return arr.filter((e,i)=> arr.slice(i+1).every(x => x < e))
}

console.log(solve([16,17,14,3,14,5,2]))
// [17,14,5,2]
console.log(solve([92,52,93,31,89,87,77,105]))
// [105]
console.log(solve([75,47,42,56,13,55]))
// [75,56,55]
console.log(solve([67,54,27,85,66,88,31,24,49]))
// [88,49]
console.log(solve([76,17,25,36,29]))
// [76,36,29]
console.log(solve([104,18,37,9,36,47,28]))
// [104,47,28]