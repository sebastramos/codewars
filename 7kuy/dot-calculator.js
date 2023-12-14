// You have to write a calculator that receives strings for input.
// The dots will represent the number in the equation.
// There will be dots on one side, an operator, and dots again after the operator.
// The dots and the operator will be separated by one space.

// Here are the following valid operators :

// + Addition
// - Subtraction
// * Multiplication

// Integer Division
// You'll have to return a string that contains dots, as many the equation returns.
// If the result is 0, return the empty string.
// When it comes to subtraction, the first number will always be greater than or equal to the second number.

function dotCalculator (equation) {
    const arr = equation.split(' ')
    switch ( arr[1] ){
        case '+':
        return '.'.repeat( arr[0].length + arr[2].length )
        case '-':
        return '.'.repeat( arr[0].length - arr[2].length )
        case '*':
        return '.'.repeat( arr[0].length * arr[2].length )
        default:
        return '.'.repeat( arr[0].length / arr[2].length )
    }
  }
  
  console.log(dotCalculator("..... + ..............."))
  // "...................."
  console.log(dotCalculator("..... - ..."))
  // ".."
  console.log(dotCalculator("..... - ."))
  // "...."
  console.log(dotCalculator("..... * ..."))
  // "..............."
  console.log(dotCalculator("..... * .."))
  // ".........."
  console.log(dotCalculator("..... // .."))
  // ".."
  console.log(dotCalculator("..... // ."))
  // "....."
  console.log(dotCalculator(". // .."))
  // ""
  console.log(dotCalculator(".. - .."))
  // ""