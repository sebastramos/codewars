// Complete the function that returns an array of length n,
// starting with the given number x and the squares of the previous number.
// If n is negative or zero, return an empty array/list.

// Solution 1
function squares(x, n) {
  let squareList = [x]
  
  if(n <= 0) {
    return []
  } else {
    for(let i = 1; i < n; i++) {
      squareList.push(Math.pow(squareList[i - 1], 2))
    }
  }
  return squareList
}

// Solution 2
function squares(x,n) {
	return n <= 0 ? [] : Array(n).fill(x).map((e,i) => Math.pow(e, Math.pow(2, i)))
}

console.log(squares(2,5))
// [2,4,16,256,65536]
console.log(squares(3,3))
// [3,9,81]
console.log(squares(5,3))
// [5,25,625]
console.log(squares(10,4))
// [10,100,10000,100000000]
console.log(squares(2,0))
// []
console.log(squares(2,-5))
// []

console.log(Math.pow(2,3))