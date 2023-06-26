//Complete the function that takes a non-negative integer n as input, 
// and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n){
let listPowerOfTwo = []
  for(let i = 0 ; i <= n; i++) {
  	listPowerOfTwo.push(2**i)
  }
  return listPowerOfTwo
}






console.log(powersOfTwo(0))
//  [1]       # [2^0]
console.log(powersOfTwo(1))
// [1, 2]     # [2^0, 2^1]
console.log(powersOfTwo(4))
// [1, 2, 4]  # [2^0, 2^1, 2^2]