// Some numbers have funny properties.

// 89
// 8¹ + 9² = 89 * 1

// 695 
// 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288
// 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.

// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

function digPow(n, p) {
  let nLength = String(n).split('').length
  let split = String(n).split('')
  let result = 0
  
    for(let i = 0; i < nLength; i++) {
      result += split[i]**(p+i)
    }
    return Number.isInteger(result / n) ? result / n : -1
  }
  
  
  console.log(digPow(89, 1))
  // return 1 => since 8¹ + 9² = 89 = 89 * 1
  
  console.log(digPow(92, 1))
  // return -1 => there is no k such as 9¹ + 2² equals 92 * k
  
  console.log(digPow(695, 2))
  // return 2 => 6² + 9³ + 5⁴= 1390 = 695 * 2
  
  console.log(digPow(46288, 3))
  // return 51 => 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51