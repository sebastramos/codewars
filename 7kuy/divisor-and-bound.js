// Given a Divisor and a Bound.
// Find the largest integer N.

// Conditionsgoogle:
// N is divisible by divisor         N / divisor

// N is less than or equal to bound  N <= bound

// N is greater than 0.              N > 0

// Notes
// The parameters (divisor, bound) passed to the function are only positive values.
// It's guaranteed that a divisor is Found.

// Input >> Output Examples
// divisor = 2, bound = 7 
// ==> return (6)

// Explanation:
// (6) is divisible by (2) 
//  (6) is less than or equal to bound (7)
// and (6) is > 0

function maxMultiple(divisor, bound){
  let largestInt = []
    for(let N = 0; N <= bound; N++) {
      if((N / divisor) % 1 === 0
        && N <= bound 
        && N > 0) {
         largestInt.push(N)
      }
    }
    return Math.max(...largestInt)
  }
  
  console.log(Number.isInteger(10 / 50))
  
  console.log(maxMultiple(2,7))
  // 6
  console.log(maxMultiple(3,10))
  // 9
  console.log(maxMultiple(7,17))
  // 14
  console.log(maxMultiple(10,50))
  // 50
  console.log(maxMultiple(37,200))
  // 185
  console.log(maxMultiple(7,100))
  // 98