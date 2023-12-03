// Modify the kebabize function so that it converts a camel case string into a kebab case.

// the returned string should only contain lowercase letters.

// Solution 1
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

// Solution 2
function kebabize(str) {
  const tmpStr = str.split("").filter(e => e.toLowerCase() !== e.toUpperCase()).join("")
  
  let res = tmpStr[0].toLowerCase();
  for(let i = 1; i < tmpStr.length; i++){
    if(tmpStr[i].toUpperCase() == tmpStr[i]){
      res = res + "-" + tmpStr[i].toLowerCase()
    } else {
      res += tmpStr[i]
    }
  }
  return res;
}

console.log(kebabize("camelsHaveThreeHumps"))
// "camels-have-three-humps"
console.log(kebabize("camelsHave3Humps"))
// "camels-have-humps"
console.log(kebabize("CAMEL"))
// "c-a-m-e-l"