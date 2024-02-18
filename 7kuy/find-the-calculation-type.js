// You have to create a function calcType, which receives 3 arguments: 2 numbers, and the result of an unknown operation performed on them (also a number).

// Based on those 3 values you have to return a string, that describes which operation was used to get the given result.

// The possible return strings are: "addition", "subtraction", "multiplication", "division".

// In case of division you should expect that the result of the operation is obtained by using / operator on the input values - no manual data type conversion or rounding should be performed.
// Cases with just one possible answers are generated.
// Only valid arguments will be passed to the function.

function calcType(a, b, res) {
  if( a + b === res) {
  	return 'addition'
  } else if( a - b === res) {
  	return "subtraction"
  }  else if( a * b === res) {
  	return "multiplication"
  } else if( a / b === res) {
  	return "division"
  }
}

console.log(calcType(1,2,3))
// 'addition'
console.log(calcType(10,4,40))
// 'multiplication'
console.log(calcType(10,5,5))
// 'subtraction'
console.log(calcType(9,5,1.8))
// 'division'