// The main idea is to count all the occurring characters in a string. 
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty?
// Then the result should be empty object literal, {}.


function count(string) {
	let count = {}
  string = string.split('').forEach(el => count[el] ? count[el]++ : count[el] = 1)
  return count
}

function count(string) {
  let count = {}
  
  for(let i = 0; i < string.length; i++) {
  	if(count.hasOwnProperty(string[i])) {
    	count[string[i]] += 1
    } else {
    	count[string[i]] = 1
    }
  }
  return count
}

console.log(count(''))
// {}
console.log(count('a'))
// {'a': 1} */
console.log(count('ab'))
// {'a': 1, 'b': 1}
console.log(count('aba'))
// {'a': 2, 'b': 1}
console.log(count('ABC'))
// {'A': 1, 'B': 1, 'C': 1}