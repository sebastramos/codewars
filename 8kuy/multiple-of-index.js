// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Solution 1
function multipleOfIndex(array) {
let result = []
  for(let i = 0; i < array.length; i++)
  if (Number.isInteger(array[i] / i) || array[i] === 0) {
  	result.push(array[i])
  	}
   return result
}

// Solution 2
function multipleOfIndex(array) {
	return array.filter((val, i) => val % i === 0 || val === 0)
}


console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]))
// [-6, 32, 25]
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]))
// [-1, 10]
console.log(multipleOfIndex([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]))
// [-85, 72, 0, 68]
console.log(multipleOfIndex([0, 2, 3, 6, 9]))
 // [0, 2, 6]