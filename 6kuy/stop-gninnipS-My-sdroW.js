// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.

// Solution 1
function spinWords(string) {
	const str = string.split(' ')
  let bigWord = str.filter(e => e.length >= 5)
  let result = []
  
  for(let i = 0; i < str.length; i++) {
  	if(!bigWord.includes(str[i])) {
    	result.push(str[i])
    } else {
    	result.push(str[i].split('').reverse().join(''))
    }
  }
  return result.join(' ')
}

// Solution 2
function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word
  }).join(' ')
}

console.log(spinWords("Welcome"))
// "emocleW"
console.log(spinWords("Hey fellow warriors"))
// "Hey wollef sroirraw"
console.log(spinWords("This is a test"))
// "This is a test"
console.log(spinWords("This is another test"))
// "This is rehtona test"
console.log(spinWords("You are almost to the last test"))
// "You are tsomla to the last test"
console.log(spinWords("Just kidding there is still one more"))
// "Just gniddik ereht is llits one more")
console.log(spinWords("Seriously this is the last one"))
// "ylsuoireS this is the last one"