// Your task is simply to count the total number of lowercase letters in a string.

function lowercaseCount(str){
	let count = 0
  
	for(let i = 0; i < str.length; i++) {
  	if(/[a-z]/.test(str[i])) {
    	count++
    }
  }
  return count
}

console.log(lowercaseCount("abc"))
// 3
console.log(lowercaseCount("abcABC123"))
// 3
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"))
// 3
console.log(lowercaseCount(""))
// 0
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"))
// 0
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz"))
// 26