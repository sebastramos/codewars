// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

function toBinary(n){
	return Number(n.toString(2))
}

console.log(toBinary(1))  /* should return 1 */
console.log(toBinary(5))  /* should return 101 */
console.log(toBinary(11)) /* should return 1011 */