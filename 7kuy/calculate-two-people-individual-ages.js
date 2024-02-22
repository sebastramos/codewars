// Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null

// sum < 0
// difference < 0
// Either of the calculated ages come out to be negative

function getAges(sum,difference) {

  let average = 0
  if (sum < 0 || difference < 0 || sum - difference < 0) return null
  else average = (sum - difference) /2
  
  return [average+difference, average]
}

console.log(getAges(24,4))
// [14,10]
console.log(getAges(63,-14))
// null