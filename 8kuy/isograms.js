// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram.
// Ignore letter case.

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false


// Solution 1 
function isIsogram(str){
	let compare = str.toString().toLowerCase().split('')
  let uniqueletter = []
  compare.forEach(element => {
  	if (!uniqueletter.includes(element)) {
    	uniqueletter.push(element)
    }
  })
  return compare.length === uniqueletter.length ? true : false
}

// Solution 2
function isIsogram(str) {
	str = str.toLowerCase()
	for(let i = 0; i < str.length; i++) {
  	for(let j = i + 1; j < str.length; j++) {
    	if(str[i] === str[j]) {
    		return false	  	
      }
    }
  }
  return true 
}


console.log(isIsogram("Dermatoglyphics"))
// true
console.log(isIsogram("isogram"))
// true
console.log(isIsogram("aba"))
// false
console.log(isIsogram("moOse"))
// false
console.log(isIsogram("isIsogram"))
// false