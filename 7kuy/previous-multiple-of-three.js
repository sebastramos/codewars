// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

// Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.

const prevMultOfThree = n => {
    if(n % 3 === 0) {
        return n
    } else {
        while (n % 3 !== 0) {
          n = Number(String(n).split('').slice(0, -1).join(''))
      }
      return n === 0 ? null : n
    }
  }
  
  console.log(prevMultOfThree(1))
  // null
  console.log(prevMultOfThree(25))
  // null
  console.log(prevMultOfThree(36))
  // 36
  console.log(prevMultOfThree(1244))
  // 12
  console.log(prevMultOfThree(952406))
  // 9