// Take 2 strings s1 and s2 including only letters from a to z. 
// Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
	let str = s1.concat(s2)
  str = [...new Set(str)].sort()
  
  return str.join('')
}

console.log(longest("aretheyhere", "yestheyarehere"))
// "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))
// "abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions"))
// "acefghilmnoprstuy"