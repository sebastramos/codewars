// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str){
  let solution = []
  for(let i = 0; i < str.length; i+= 2) {
      solution.push(str.slice(i, i + 2))
  }
  return solution.map(e => e.length === 1 ? e + '_' : e)
}

console.log(solution("abcdef"))
// ["ab", "cd", "ef"]
console.log(solution("abcdefg"))
// ["ab", "cd", "ef", "g_"]
console.log(solution(""))
// []