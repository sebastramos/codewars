// Find the sum of the odd numbers within an array, after cubing the initial integers.
// The function should return undefined if any of the values aren't numbers.

// Solution 1
function cubeOdd(arr) {
  let result = []
  for(let i = 0; i < arr.length; i++) {
    if(isNaN(arr[i])) {
      return undefined
    } else if(arr[i] % 2 !== 0) {
      result.push(arr[i] ** 3)
    }
  }
  return result.reduce((a,b) => a + b, 0)
}

// Solution 2
let cubeOdd = a => {
  let isNumeric = a.every(x=>!isNaN(x)) // check if every value is NaN (if x is not NaN it's true)
  return isNumeric ? a.filter(n=>n%2).reduce((s,n)=>s+(n*n*n),0) : undefined
}

console.log(cubeOdd([1, 2, 3, 4]))
// 28
console.log(cubeOdd([-3,-2,2,3]))
// 0
console.log(cubeOdd(["a",12,9,"z",42]))
// undefined
