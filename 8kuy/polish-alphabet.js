// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

/* 
ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
*/

// and print out the string without the use of the Polish letters.

// Solution 1
function correctPolishLetters(string) {
	let diacritics =
 		{ 
			"ą" : "a",
			"ć" : "c",
			"ę" : "e",
			"ł" : "l",
			"ń" : "n",
			"ó" : "o",
			"ś" : "s",
			"ź" : "z",
			"ż" : "z"
		}
    
    let result = ''
    for(let i = 0; i < string.length; i++) {    	
    	if(string[i] in diacritics) {
      	result += diacritics[string[i]]
      } else {
      	result += string[i]
      }
    }
   return result
}


// Solution 2
let polishLetters = {
  'ą': 'a',
  'ć': 'c',
  'ę': 'e',
  'ł': 'l',
  'ń': 'n',
  'ó': 'o',
  'ś': 's',
  'ź': 'z',
  'ż': 'z',
}

function correctPolishLetters(text) {
  return text.split('').map(str => polishLetters[str] || str).join('')
}

console.log(correctPolishLetters("Jędrzej Błądziński"))
// "Jedrzej Bladzinski"
console.log(correctPolishLetters("Lech Wałęsa"))
// "Lech Walesa"
console.log(correctPolishLetters("Maria Skłodowska-Curie"))
// "Maria Sklodowska-Curie"