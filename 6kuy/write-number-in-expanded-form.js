// You will be given a number and you will need to return it as a string in Expanded Form.
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  // reassign with String(num).split('')
    num = String(num).split('')
  // declare an array to store the numbers
  let numbers = []
  // loop through 
    for(let i = 0; i < num.length; i++) {
  // if num[i] !== 0 
      if(num[i] != 0) {
  // add '0' after the number base on the position it has on the num array 
        numbers.push(num[i].padEnd(num.length - i, 0))
      }
    }
    return numbers.join(' + ')
  }
  
  console.log(expandedForm(12))
  // Should return '10 + 2'
  
  console.log(expandedForm(42))
  // Should return '40 + 2'
  console.log(expandedForm(70304))
  // Should return '70000 + 300 + 4' 
  