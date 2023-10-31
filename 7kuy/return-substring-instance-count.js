// Complete the solution so that it returns the number of times the search_text is found within the full_text.
// Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.

// Solution 1
function solution(fullText, searchText){
  return [...fullText.replaceAll(searchText, '*')].filter(el => el === '*').length
}

// Solution 2
function solution(fullText, searchText) {
 return fullText.split(searchText)
}

console.log(solution('abcdeb','b'))
// 2
console.log(solution('abc','b'))
// 1
console.log(solution('abbc','bb'))
// 1