// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  return str.split('').map(element => element + element).join('')
}

console.log(doubleChar("String"))
//"SSttrriinngg"
console.log(doubleChar("Hello World"))
//"HHeelllloo  WWoorrlldd"
console.log(doubleChar("1234!_ "))
// "11223344!!__  "