// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Solution 1
function getDivisorsCnt(n){
  let divisor = 0
    for(let i = 1; i <= n; i++) {
      if(n % i === 0) {
        divisor++
      }
    }
    return divisor
  }

  
  console.log(getDivisorsCnt(4))
  // --> 3 // we have 3 divisors - 1, 2 and 4
  console.log(getDivisorsCnt(5))
  // --> 2 // we have 2 divisors - 1 and 5
  console.log(getDivisorsCnt(12 ))
  // --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
  console.log(getDivisorsCnt(30 ))
  //--> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
  console.log(getDivisorsCnt(500000))
  // 42
  
  // Note you should only return a number, the count of divisors.
  // The numbers between parentheses are shown only for you to see which numbers are counted in each case.