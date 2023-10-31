// When provided with a String, capitalize all vowels

// Note: Y is not a vowel in this kata.

// Solution 1
function swap(string) {
	let str = []
  for(let i = 0; i < string.length; i++) {
  
  	if(string[i] === 'a' ||
  	   string[i] === 'e' ||
  	   string[i] === 'i' ||
  	   string[i] === 'o' ||
  	   string[i] === 'u') {
  	  str.push(string[i].toUpperCase())
		} else  {
    	str.push(string[i])
    }
	}
  return str.join('')
}

// Solution 2
function swap(string) {
	const vowels = ["a", "e", "i", "o", "u"]
	return string.split('').map(el => vowels.includes(el) ? el.toUpperCase() : el).join('')
}



console.log(swap(""))
// ""
console.log(swap("   @@@"))
    // "   @@@"
console.log(swap("HelloWorld!"))
// "HEllOWOrld!"
console.log(swap("Sunday"))
// "SUndAy"
console.log(swap("Codewars"))
// "COdEwArs"
console.log(swap("Monday"))
// "MOndAy"
console.log(swap("Friday"))
// "FrIdAy"
console.log(swap("abracadabra"))
// "AbrAcAdAbrA"
console.log(swap("AbrAcAdAbrA"))
//"AbrAcAdAbrA"
console.log(swap("ABRACADABRA"))
// "ABRACADABRA"
console.log(swap("aBRaCaDaBRa"))
// "ABRACADABRA"