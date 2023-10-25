// Given a string and an array of integers representing indices, 
// capitalize all letters at the given indices.
// The input will be a lowercase string with no spaces and an array of digits.

// Solution 1
function capitalize(s,arr){
  
  let capS = s.split("")
  
  for(let i = 0; i < arr.length; i++) {
    if(capS[arr[i]]) {
      capS[arr[i]] = capS[arr[i]].toUpperCase();
    }
  }
  
  return capS.join('')
  }
  
// Solution 2
function capitalize(s,arr){
  return [...s].map((x, i) => arr.includes(i) ? x.toUpperCase() : x).join('')
}


console.log(capitalize("abcdef",[1,2,5]))
// "aBCdeF"
console.log(capitalize("abcdef",[1,2,5,100]))
// "aBCdeF"
  