// The goal of this exercise is to convert a string to a new string where each character in the new string is 
// "(" if that character appears only once in the original string,
// or ")" if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.


// Notes
// Assertion messages may be unclear about what they display in some languages. 
// If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map((element, index, array) => {
    	// indexOf will check the first element (starting from the left) and return the index of the element
      // lastIndexOf will check the first element (starting from the right) and return the index of the element
      
      // if index are === them '('
      // if not ')'
      return array.indexOf(element) === array.lastIndexOf(element) ? '(' : ')'
      
    })
    .join('');
}


console.log(duplicateEncode("din"))
// "((("
console.log(duplicateEncode("recede"))
// "()()()"
console.log(duplicateEncode("Success"))
// ")())())"
console.log(duplicateEncode("(( @"))
// "))(("