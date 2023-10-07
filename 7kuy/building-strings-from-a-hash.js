// Complete the solution so that it takes the object passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE".
// Each key/value pair should be separated by a comma except for the last pair.

function solution(pairs){
  return Object.entries(pairs).map(([key, value]) => `${key} = ${value}`).join(',');
  }
  
  console.log(solution({a: 1, b: '2'}))
  // "a = 1,b = 2"