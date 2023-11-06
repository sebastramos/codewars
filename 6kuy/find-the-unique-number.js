// There is an array with some numbers.
// All numbers are equal except for one. 
// Try to find it!

// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.

// Solution 1
function findUniq(arr) {
  const counts = {}
  
    for(const num of arr) {
      counts[num] = counts[num] ? counts[num] + 1 : 1
    }
    return Number(Object.keys(counts).find(e => counts[e] === 1))
  }
   
  // Solution 2
  function findUniq(arr) {
    return +arr.filter(e => arr.indexOf(e) === arr.lastIndexOf(e))
  }
  
  console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
  // 2
  console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))
  // 0.55  