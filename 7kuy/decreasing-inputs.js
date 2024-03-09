// This kata is all about adding numbers.

// You will create a function named add. 
// It will return the sum of all the arguments. 
// Sounds easy, doesn't it?

// Well Here's the Twist. 
// The inputs will gradually decrease with their index as parameter to the function.

  // add(3,4,6); 
  // returns ( 3 / 1 ) + ( 4 / 2 ) + ( 6 / 3 ) = 7

// Remember the function will return 0 if no arguments are passed and it must round the result if sum is a float.

function add() {
	const arr = Object.values(arguments)
  return arr.length > 0 ? arr.map((e,i) => e / (i+1)).reduce((a,b) => a + b) : 0
}

console.log(add())
// 0
console.log(add(1,2,3))
// 3
console.log(add(1,4,-6,20))
// 6
