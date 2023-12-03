// Modify the kebabize function so that it converts a camel case string into a kebab case.

// the returned string should only contain lowercase letters.

function kebabize(str) {
	let kebabeSentence = []
	let word = ''
  
	for(let i = 0; i < str.length; i++) {
  
  	if(!isNaN(str[i])) {
  	      word += ''
  	    } else if(str[i] !== str[i].toUpperCase()) {
  	      word += str[i]
  	    } else {
  	    	kebabeSentence.push(word)
          word = ''
          word += str[i].toLowerCase()
  	    }
  }
  kebabeSentence.push(word)
  
return kebabeSentence[0] === '' ? kebabeSentence.join('-').slice(1) : kebabeSentence.join('-')
}

console.log(kebabize("camelsHaveThreeHumps"))
// "camels-have-three-humps"
console.log(kebabize("camelsHave3Humps"))
// "camels-have-humps"
console.log(kebabize("CAMEL"))
// "c-a-m-e-l"