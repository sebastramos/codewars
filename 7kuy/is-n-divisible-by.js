// Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

function isDivisible(){
	return [...arguments].every(e => arguments[0] % e === 0)
}

console.log(isDivisible(6,1,3))
//  true because 6 is divisible by 1 and 3
console.log(isDivisible(12,2))
//  true because 12 is divisible by 2
console.log(isDivisible(100,5,4,10,25,20))
//  true
console.log(isDivisible(12,7))
//  false because 12 is not divisible by 7