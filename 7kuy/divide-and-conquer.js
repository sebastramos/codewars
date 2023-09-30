// Given a mixed array of number and string representations of integers,
// add up the non-string integers and
// subtract the total of the string integers.

// Return as a number.


function divCon(x){
	let int = x.filter(el => typeof el === 'number').reduce((a,b) => a + b, 0)
	let str = x.filter(el => typeof el === 'string').map(e => Number(e)).reduce((a,b) => a + b, 0)
 
	return int - str  
}

console.log(divCon([9, 3, '7', '3']))
// 2
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
// 14
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))
// 13 