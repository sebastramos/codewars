// Complete the function that takes a list of numbers (nums), as the only argument to the function.
// (1) Take each number in the list and square it if it is even, or square root the number if it is odd.
// Take this new list and (2)return the sum of it, rounded to two decimal places.

// The list will never be empty and will only contain values that are greater than or equal to zero.

const sumSquareEvenRootOdd = ns => {
	let sum = 0
	ns.map(function (e) {
  		if(e % 2 === 0) {
      	sum += Math.pow(e, 2)
      } else {
      	sum += Math.sqrt(e)
      }
    })
    return +sum.toFixed(2)
}

console.log(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]))
// 91.61
console.log(sumSquareEvenRootOdd([1,14,9,8,17,21]))
// 272.71