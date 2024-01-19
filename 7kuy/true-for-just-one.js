// Create a function called one that accepts two params:

// a sequence
// a function

// and returns true only if the function in the params returns true for exactly one (1) item in the sequence.

// Solution 1
function one(arr, fun) {
	let truthiness = []
	for(let i = 0; i < arr.length; i++) {
  	if(fun(arr[i])) {
    	truthiness.push(true)
    }
  }
	return truthiness.length === 1
}

// Solution 2
function one(arr, fun){
    return arr.filter(e => fun(e)).length === 1
}

// Solution 3
function one(arr, fun){
    return arr.filter(fun).length === 1
}

console.log(one([1,2,3,4,5], function(item){ return item<2}))
// true
console.log(one([1,2,3,4,5], function(item){ return item%2 }))
// false
console.log(one([1,2,3,4,5], function(item){ return item>5 }))
// false