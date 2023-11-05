// Implement the function unique_in_order which takes as argument a sequence 
// and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

function uniqueInOrder(item) {
	let result = []
	for(let i = 0; i < item.length; i++) {
  	if(item[i] !== item[i - 1]) {
    	result.push(item[i])
    }
  }
  return result
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
// ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'))
// ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]))
// [1,2,3]