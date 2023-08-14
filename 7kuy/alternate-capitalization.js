// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. 
// Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Solution 1
function capitalize(s){
  const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("")
  const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("")
  return [even, odd];
}

// Solution 2
function capitalize(s) {
  const arr = s.split('');
  let a = '', b = '';
  
  for (let i = 0; i < arr.length; i++) {
    if (i % 2) {
      a += arr[i];
      b += arr[i].toUpperCase()
    } else {
      a += arr[i].toUpperCase()
      b += arr[i]
    }
  }
  
  return [a, b];
}

console.log(capitalize("abcdef"))
console.log(capitalize("abracadabra"))