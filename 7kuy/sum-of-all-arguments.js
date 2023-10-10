// Write a function that finds the sum of all its arguments.

function sum(...n) {
  return n.reduce((a,b) => a + b)
}

console.log(sum(1, 2, 3))
// => 6
console.log(sum(8, 2))
// => 10
console.log(sum(1, 2, 3, 4, 5))
// => 15