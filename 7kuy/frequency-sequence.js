// Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

function freqSeq(str,sep) {
  str = str.split('')
  let once = {}
  let output = ''
  
  function count() {
  	str.map(e => once.hasOwnProperty(e) ? once[e] +=1 : once[e] = 1)
  }
  
  function replace() {
  	str.map(e => output += sep + once[e])
  }
  
  count()
  replace()
  return output.slice(1)
}

console.log(freqSeq("hello world", "-"))
// "1-1-3-3-2-1-1-2-1-3-1"
console.log(freqSeq("19999999", ":"))
// "1:7:7:7:7:7:7:7"
console.log(freqSeq("^^^**$", "x"))
// "3x3x3x2x2x1" 