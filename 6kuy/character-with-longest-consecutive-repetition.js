// For a given string s find the character c with longest consecutive repetition and return:

// [c, l]
// where l is the length of the repetition.
// If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:
// ["", 0]

function longestRepetition(s) {
  let count = 0
  let prevLetter = ''
  
  return s.toLowerCase().split('').reduce((acc, curr) => {
    if(curr === prevLetter){
      count++
    }
    else{
      count = 1
    }

    if(count > acc[1]){
      acc[1] = count
      acc[0] = curr
    }

    prevLetter = curr
    return acc
  }, ['', 0])
}

console.log(longestRepetition("aaaabb"))
// ["a",4]
console.log(longestRepetition("bbbaaabaaaa"))
// ["a",4]
console.log(longestRepetition("cbdeuuu900"))
// ["u",3]
console.log(longestRepetition("abbbbb"))
// ["b",5]
console.log(longestRepetition("aabb"))
// ["a",2]
console.log(longestRepetition(""))
// ["",0]
console.log(longestRepetition("ba"))
// ["b",1]