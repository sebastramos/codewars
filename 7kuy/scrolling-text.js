// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

function scrollingText(str) {
	str = str.toUpperCase()
	let arr = [str]
  
  for(let i = 1; i < str.length; i++) {
		let word = arr[arr.length - 1]
    let frontChar = word[0]
    
    arr.push(`${word.slice(1)}${frontChar}`)
  }
  return arr
}

console.log(scrollingText("codewars"))

/* 
[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ] 
*/