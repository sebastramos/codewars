// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. 
// Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers 
// return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: 
// "Odd is greater than Even"

// If the total of both even and odd numbers are identical 
// return: "Even and Odd are the same"

function evenOrOdd(str) {
	str = str.split('').map(e => +e)
  let even = str.filter(n => n % 2 === 0).reduce((a,b) => a + b, 0)
  let odd = str.filter(n => n % 2 !== 0).reduce((a,b) => a + b, 0)
  
  return even === odd ? 'Even and Odd are the same' : even > odd ? 'Even is greater than Odd' : 'Odd is greater than Even'
}

console.log(evenOrOdd('12'))
// 'Even is greater than Odd'
console.log(evenOrOdd('123'))
// 'Odd is greater than Even'
console.log(evenOrOdd('112'))
// 'Even and Odd are the same'