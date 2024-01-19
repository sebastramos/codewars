// You are given a string s. 
// It's a string consist of letters, numbers or symbols.

// Your task is to find the Longest substring consisting of unique characters in s, and return the length of it.

/* 
Note
1 <= s.length <= 10^7
5 fixed testcases
100 random testcases, testing for correctness of solution
100 random testcases, testing for performance of code
All inputs are valid.
Pay attention to code performance.
If my reference solution gives the wrong result in the random tests, please let me know(post an issue).
*/

function longestSubstringOf(str) {
	let max = 0
  let subs = []

  for (let i = 0; i < str.length; i++) {
    if (subs.includes(str[i])) {
      subs = subs.slice(subs.indexOf(str[i]) + 1)
    }
    subs.push(str[i])
    max = subs.length > max ? subs.length : max
  }
  return max
}


console.log(longestSubstringOf("hchzvfrkmlnozjk"))
// 11
console.log(longestSubstringOf("baacab"))
// 3
console.log(longestSubstringOf("abcd"))
// 4
console.log(longestSubstringOf("!@#$%^&^%$#@!"))
// 7
console.log(longestSubstringOf("abcd".repeat(10000) + "abcde" + "abcd".repeat(10000)))
// 5