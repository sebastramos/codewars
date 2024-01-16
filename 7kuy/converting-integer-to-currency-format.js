// Write a function that takes an integer in input and outputs a string with currency format.

// Integer in currency format is expressed by a string of number where every three characters are separated by comma.

// Input will always be an positive integer, so don't worry about type checking or negative/float values.

function toCurrency(n) {
	let nReverse = String(n).split('').reverse()
  let result = []
  
  for(let i = 0; i < nReverse.length; i++) {
  	if(i % 3 === 0 && i !== 0) {
    	result.push(',')
      result.push(nReverse[i])
    } else {
    	result.push(nReverse[i])
    }
  }
  return result.reverse().join('')
}


console.log(toCurrency(123456))
// "123,456"
console.log(toCurrency(1234))
// "1,234"
console.log(toCurrency(123))
// "123"
console.log(toCurrency(123456789012))
// "123,456,789,012"