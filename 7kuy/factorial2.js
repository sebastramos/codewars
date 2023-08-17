// Your task is to write function factorial.


// Solution 1
function factorial(n){
	if (n === 0 || n === 1) {
	return 1
} 

let result = n
let count = n

  while (count > 1) {
  	 count -= 1
     result *= count
   }
	return result
}

console.log(factorial(0))
// 1
console.log(factorial(1))
// 1
console.log(factorial(4))
// 24
console.log(factorial(7))
// 5040
console.log(factorial(17))
// 355687428096000