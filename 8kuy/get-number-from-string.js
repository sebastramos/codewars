// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

function getNumberFromString(s) {
	s = s.replaceAll(' ', '')
	let number = []
	for(let i = 0; i < s.length; i++) {
  	if (!isNaN(s[i])) {
    	number.push(s[i])
    }
  }
  return +number.join('')
}

function getNumberFromString(s) {
  return Number(s.split('').filter(el => el <= '9' && a >= '0').join('')) 
}

console.log(getNumberFromString("1"))
// 1
console.log(getNumberFromString("123"))
// 123
console.log(getNumberFromString("this is number: 7"))
// 7
console.log(getNumberFromString("100000"))
// 100000