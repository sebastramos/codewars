// Write function alternateCase which 
// switch every letter in string from upper to lower and from lower to upper.
// E.g: Hello World -> hELLO wORLD

function alternateCase(str) {
  let alternate = []
    for(let i = 0; i < str.length; i++) {
      /[a-z]/.test(str[i]) ? alternate.push(str[i].toUpperCase()) : alternate.push(str[i].toLowerCase())
    }
    return alternate.join('')
  }
  
  console.log(alternateCase("abc"))
  // "ABC"
  console.log(alternateCase("ABC"))
  // "abc"
  console.log(alternateCase("Hello World"))
  // "hELLO wORLD"
  