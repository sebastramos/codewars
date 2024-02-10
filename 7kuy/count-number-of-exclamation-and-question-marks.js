// Count the number of exclamation marks and question marks, return the product.

function product(string) {
	const exclamation = [...string].filter(e => e === '!').length
  const question = [...string].filter(e => e === '?').length
  return exclamation * question
}

console.log(product(""))
// 0
console.log(product("!"))
// 0
console.log(product("!ab? ?"))
// 2
console.log(product("!!"))
// 0
console.log(product("!??"))
// 2
console.log(product("!???"))
// 3
console.log(product("!!!??"))
// 6
console.log(product("!!!???"))
// 9
console.log(product("!???!!"))
// 9
console.log(product("!????!!!?"))
// 20