// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

// The first mission: Traversing arr, find the shortest string length.

// The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it.
// return the result after finished the work.


// Solution 1
function cutIt(arr) {
	function shortestString() {
  	let shortString = []
    arr.map(e => {
    	if(shortString.length === 0){
        shortString.push(e)
    	} else if (e.length < shortString[0].length) {
      	shortString.shift()
        shortString.push(e)
      }
  	})
    return shortString
	}
  
  function sliceStringLength() {
  	return arr.map(str => str.slice(0,shortestString()[0].length))
  }
  
  return sliceStringLength()
}

// Solution 2 
function cutIt(arr) {
	const minLength = Math.min(...arr.map(str => str.length))
  return arr.map(x => x.slice(0, minLength))
}

console.log(cutIt(["ab","cde","fgh"]))
// ["ab","cd","fg"]
console.log(cutIt(["abc","defgh","ijklmn"]))
// ["abc","def","ijk"]
console.log(cutIt(["codewars","javascript","java"]))
// ["code","java","java"]