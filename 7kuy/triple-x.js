// Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

// capital X's do not count as an occurrence of "x".
// if there are no "x"'s then return false

function tripleX(str) {
	str = str.split('')
    let i = str.indexOf('x')  
  
    return str[i+1] === 'x' && str[i+2] === 'x' ? true : false
}

console.log(tripleX("abraxxxas"))
// true
console.log(tripleX("xoxotrololololololoxxx"))
// false
console.log(tripleX("softX kitty, warm kitty, xxxxx"))
// true
console.log(tripleX("softx kitty, warm kitty, xxxxx"))
// false