// You are given a string representing a number in binary.
// Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).

function eliminateUnsetBits(number) {
	number = number.split('').filter(e => e === '1').join('')
	return number === '' ? 0 : parseInt(number, 2)
}

console.log(eliminateUnsetBits("11010101010101"))
// 255 (= 11111111)
console.log(eliminateUnsetBits("111"))
// 7
console.log(eliminateUnsetBits("1000000"))
// 1
console.log(eliminateUnsetBits("000"))
// 0