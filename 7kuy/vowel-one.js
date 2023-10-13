// Write a function that 
// takes a string and outputs a strings of 1's and 0's 
// where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

function vowelOne(str) {
  let result = []
  
    for(let i = 0; i < str.length; i++) {
      /[aeiouAEIOU]/.test(str[i]) ? result.push(1) : result.push(0)
    }
    return result.join('')
  }
  
  console.log(vowelOne("abceios" ))
  // "1001110"
  console.log(vowelOne("aeiou, abc" ))
  // "1111100100"
  console.log(vowelOne("vowelOne" ))
  // "01010101"
  console.log(vowelOne("123, arou"))
  // "000001011"