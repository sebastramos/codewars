// Kevin is noticing his space run out! 
// Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

// Solution 1
function spacey(array){
  let noSpace = []
  for(let i = 1; i <= array.length; i++) {
  	noSpace.push(array.slice(0, i).join(''))
  }
  return noSpace
}

// Solution 2
function spacey(array) {
	let string = ''
  return array.map(el => string += el)
}

console.log(spacey(['kevin', 'has','no','space']))
// [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']
console.log(spacey(['this','cheese','has','no','holes']))
// ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']