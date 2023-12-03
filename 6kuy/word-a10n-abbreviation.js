// The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. 
// Similarly, a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

// A "word" is a sequence of alphabetical characters.
// By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").

// Solution 1
function abbreviate(str) {

	function separate() {
		let nonWords = ['!', '@', '#', '$',
										'%', '^', '&', '*',
	                  '_', '+', '=', '-',
    	              '/', '|', '/', ' ', ',']
                  
		let sentence = []
  	let abbr = ''
    
  	for(let i = 0; i < str.length; i++) {
		 	if(nonWords.includes(str[i])) {
     		sentence.push(abbr)
        abbr = ''
     		sentence.push(str[i])
    	 } else {
  	   	abbr += str[i]
	     }
  	}
    sentence.push(abbr)
  	return sentence
  }

  function checkAbbr() {
    let check = separate()
    let abbr = []
    
    for(let i = 0; i < check.length; i++) {
      if(check[i].length >= 4) {
        abbr.push(`${check[i][0]}${check[i].length -2}${check[i][check[i].length -1]}`)
      } else {
        abbr.push(check[i])
      }
    }
    return abbr.join('')
  }
  
  return checkAbbr()
}


// Solution 2 (using regex)
function abbreviate(string) {
  return string.replace(/\w{4,}/g, function(word) {
    return word[0] + (word.length - 2) + word.slice(-1)
  })
}

console.log(abbreviate("You need, need not want, to complete this code-wars mission"))
// 'You n2d, n2d not w2t, to c6e t2s c2e-w2s m5n'
console.log(abbreviate("elephant-rides are really fun!"))
// "e6t-r3s are r4y fun!"
console.log(abbreviate("internationalization"))
// "i18n"
console.log(abbreviate("accessibility"))
// "a11y"
console.log(abbreviate("Accessibility"))
// "A11y"
console.log(abbreviate("elephant-ride"))
// "e6t-r2e"