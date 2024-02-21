// Write a function last that accepts a list and returns the last element in the list.

// If the list is empty return null

const last = xs => xs.length < 1 ? null : xs[xs.length -1]

console.log(last([1,2,3]))
// 3
console.log(last([]))
// null