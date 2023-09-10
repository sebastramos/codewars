// Find the greatest common divisor of two positive integers.
// The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.


// Solution 1 (good but slow)
function mygcd(x,y){
  let divisor = []
  
  for(let i = 0; i <= x; i++) {
  	if(Number.isInteger(x / i) && Number.isInteger(y / i)) {
    	divisor.push(i)
    }
  }
  return Math.max(...divisor)
}

// Solution 2 (base on euclidian algorithm)
function mygcd(x,y){  
  return y == 0 ? x : mygcd(y, x % y)
}


console.log(mygcd(30, 12))
// 6
console.log(mygcd(36, 12))
// 12
console.log(mygcd( 8,  9))
// 1
console.log(mygcd( 1,  1))
// 1