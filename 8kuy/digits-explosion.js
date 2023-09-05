// Given a string made of digits [0-9],
// return a string where each digit is repeated a number of times equals to its value.

// Examples
// "312" should return "333122"
// "102269" should return "12222666666999999999"

function explode(s) {
 let result = []
 
 for(let i = 0; i < s.length; i++) {
 		for(let j = 0; j < s[i]; j++) {
    	result.push(s[i])
    }
 }
 return result.join('')
}

console.log(explode("312"))
// "333122"
console.log(explode("102269"))
// "12222666666999999999"
console.log(explode("0"))
// ""
console.log(explode("000"))
// ""
console.log(explode("123")) 
// "122333"