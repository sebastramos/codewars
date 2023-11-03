// Given a number return the closest number to it that is divisible by 10.

// Solution 1
const closestMultiple10 = num => {
   if(num % 10 >= 5) {
    return Math.ceil(num / 10) * 10
  } else {
    return Math.floor(num / 10) * 10
  }
}

// Solution 2
const closestMultiple10 = num => Math.round(num / 10) * 10

console.log(closestMultiple10(22))
console.log(closestMultiple10(25))
console.log(closestMultiple10(37))