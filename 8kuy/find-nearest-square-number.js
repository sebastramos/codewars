// Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

// For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

// If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

// Good luck :)

// Solution 1
function nearestSq(n) {
  let numUnder = []
  let numAbove = []
  let compareUnder
  let compareAbove
    // loop  continue till i*i <= n
    for(let i = 0; i*i <= n; i++) {
      numUnder.push(i*i)
      numAbove = (i+1) * (i+1)
    }
    numUnder = Math.max(...numUnder)
    
    compareUnder = Math.abs(n - numUnder)
    compareAbove = Math.abs(n - numAbove)
    
    return compareUnder < compareAbove ? numUnder : numAbove
  }
  
  console.log(nearestSq(1))
  // 1
  console.log(nearestSq(2))
  // 1
  console.log(nearestSq(10))
  // 9
  console.log(nearestSq(111))
  // 121
  console.log(nearestSq(9999))
  // 10000
  
  
  