// Debug a function called calculate that takes 3 values.
// The first and third values are numbers.

// The second value is a character.
// If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers.

// If the string is not one of the specified characters, the function should return null.

let calculate = function(a, o, b) {
  if (o === "+") {
    return a + b
  } else if (o === "-") {
    return a - b
  } else if (o === "/") {
    return a / b === Infinity ? null : a / b === -Infinity ? null : a / b
  } else if (o === "*") {
    return a * b
  } else {
    return null
  }
}

console.log(calculate(2, "+", 4))
//Should return 6
console.log(calculate(6, "-", 1.5))
//Should return 4.5
console.log(calculate(-4, "*", 8))
//Should return -32
console.log(calculate(49, "/", -7))
//Should return -7
console.log(calculate(8, "m", 2))
//Should return null
console.log(calculate(4, "/", 0))
//should return null
