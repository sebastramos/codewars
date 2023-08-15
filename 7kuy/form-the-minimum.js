// Given a list of digits, 
// return the smallest number that could be formed from these digits, 
// using the digits only once (ignore duplicates).

// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

// minValue ({1, 3, 1})
//  return (13)
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// minValue({5, 7, 5, 9, 7}) 
// return (579)
// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7})
// return (134679)
// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications

function minValue(values){
  let uniq = values.filter((el, index) => values.indexOf(el) === index)
  return Number(uniq.sort((a,b) => a - b).join(''))
}

console.log(minValue([1, 3, 1]))
// 13
console.log(minValue([4, 7, 5, 7]))
// 457
console.log(minValue([4, 8, 1, 4]))
// 148
console.log(minValue([5, 7, 9, 5, 7]))
// 579
console.log(minValue([6, 7, 8, 7, 6, 6]))
// 678