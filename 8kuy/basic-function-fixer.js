// I created this function to add five to any number that was passed in to it and return the new value. 
// It doesn't throw any errors but it returns the wrong number.

// Can you help me fix the function ?

// function addFive(num) {
//  var total = num + 5
//   return num
// }

// solutiion 1
function addFive(num) {
  let total = num + 5
  return total
}

// solution 2
function addFive(n) {
  return n + 5
}

// solution 3
const addFive = n => n + 5


console.log(addFive(10))
// 15