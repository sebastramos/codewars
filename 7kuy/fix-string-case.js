// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.

// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.

// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s){
  const lowerCase = s.split('').filter(el => el === el.toLowerCase())
  const upperCase = s.split('').filter(el => el === el.toUpperCase())
  
    if (lowerCase.length === upperCase.length) {
      return s.toLowerCase()
    } else if (lowerCase.length > upperCase.length) {
      return s.toLowerCase()
    } else {
        return s.toUpperCase()
    }
  }
  
  console.log(solve("coDE")) // 'code'
  console.log(solve("code")) // 'code'
  console.log(solve("CODe")) // 'CODE'
  console.log(solve("COde")) // 'code'
  console.log(solve("Code")) // 'code'
  
  