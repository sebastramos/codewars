// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.


// Solution 1 (without using regex)
function consonantCount(str) {
	str = str.toLowerCase()
	let count = 0
	for(let i = 0; i < str.length; i++) {
  	if(str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122 &&
    		str[i].charCodeAt() !== 97 &&
        str[i].charCodeAt() !== 101 &&
        str[i].charCodeAt() !== 105 &&
        str[i].charCodeAt() !== 111 &&
        str[i].charCodeAt() !== 117)
        {
    	count++
    }
	}	
  return count
}

// Solution 2 (without using regex)
function consonantCount(str) {
  let arr = [];
  let vocals = "bcdfghjklmnpqrstvwxzy";
  for (let i = 0; i < str.length; i++) {
    if(vocals.includes(str[i].toLowerCase())) {
      arr.push(str[i]);
    }
  }
  return arr.length;
}

console.log(consonantCount('', 0))
console.log(consonantCount('aeiouAEIOU', 0))
console.log(consonantCount('aaa', 0))
console.log(consonantCount('bcdfghjklmnpqrstvwxyz', 21))
console.log(consonantCount('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ', 42))
console.log(consonantCount('y', 1))
console.log(consonantCount('Y', 1))
console.log(consonantCount('01234567890_', 0))
console.log(consonantCount(' ^&$#', 0))
console.log(consonantCount('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#', 42))