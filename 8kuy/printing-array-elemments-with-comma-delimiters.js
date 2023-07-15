// Output: String with comma delimited elements of the array in th same order.

// Solution 1
function printArray(array){
	return String(array)
}

// Solution 2
function printArray(array){
	return array.join()
}

console.log(printArray(["h","o","l","a"]))
// "h,o,l,a"


