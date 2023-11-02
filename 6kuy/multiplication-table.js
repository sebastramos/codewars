// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:
/* 
1 2 3
2 4 6
3 6 9
*/

// [[1,2,3],[2,4,6],[3,6,9]]

function multiplicationTable(size) {
	let result = []
	let cont = []
	for(let i = 1; i <= size; i++) {
  	for(let j = 1; j <= size; j++) {
    	cont.push(j * i)
    }
    result.push(cont)
    cont = []
  }
  return result
}

console.log(multiplicationTable(3))
// [[1,2,3], [2,4,6], [3,6,9]]
console.log(multiplicationTable(5))
//[[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [3, 6, 9, 12, 15], [4, 8, 12, 16, 20], [5, 10, 15, 20, 25]]