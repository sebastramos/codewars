// i is the imaginary unit, it is defined by 
// i² = −1, therefore it is a solution to x² + 1 = 0.

// Complete the function pofi that returns 
// i to the power of a given non-negative integer in its simplest form, as a string (answer may contain i).

function pofi(n){
    switch (n%4) {
      case 0: return '1'
      case 1: return 'i'
      case 2: return '-1'
      case 3: return '-i'
    }
  }
  
  console.log(pofi(0))
  // '1'
  console.log(pofi(1))
  // 'i'
  console.log(pofi(2))
  // '-1'
  console.log(pofi(3))
  // '-i'
  console.log(pofi(4))
  // '1'
  console.log(pofi(5))
  // 'i'
  console.log(pofi(6))
  // '-1'
  console.log(pofi(7))
  // '-i'
  console.log(pofi(8))
  // '1'
  console.log(pofi(9))
  // 'i'
  console.log(pofi(10))
  // '-1'