// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// for this kata 'y' isn't considered a vowel.
// only => (a, e, i, o, u)

// Solution 1
function disemvowel(str) {
  return str.toString().replaceAll('a','').replaceAll('e','').replaceAll('i','').replaceAll('o','').replaceAll ('u', '').replaceAll('A','').replaceAll('E','').replaceAll('I','').replaceAll('O','').replaceAll ('U', '')
}

// Solution 2
function disemvowel(str) {
let string = ''
  for (let i = 0; i < str.length; i++) {
  	if(str[i] === 'a' ||
    	 str[i] === 'A' ||
       str[i] === 'e' ||
       str[i] === 'E' ||
       str[i] === 'i' ||
       str[i] === 'I' ||
       str[i] === 'o' ||
       str[i] === 'O' ||
       str[i] === 'u' ||
       str[i] === 'U') {
    		 string += ''
       } else {
       	 string += str[i]
       }
		}
  return string
}

// Solution 3
const disemvowel = (str) => {
	const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	let newStr = ''
	for (let i = 0; i <= str.length; i++) {
		let char = str.charAt(i)
		if (vowels.indexOf(char) === -1) {
			newStr += char
		}
	}
		return newStr;
}

console.log(disemvowel("This website is for losers LOL!"))