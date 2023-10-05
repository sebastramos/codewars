// This kata is the first of a sequence of four about "Squared Strings".

// You are given a string of n lines, each substring being n characters long: For example:

// s = "abcd\nefgh\nijkl\nmnop"

// We will study some transformations of this square of strings.

// Vertical mirror: vert_mirror(or vertMirror or vert - mirror)
// vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"

// Horizontal mirror: hor_mirror(or horMirror or hor - mirror)
// hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"

// or printed:
// vertical mirror | horizontal mirror
// abcd-- > dcba | abcd-- > mnop
// efgh hgfe | efgh ijkl
// ijkl lkji | ijkl efgh
// mnop ponm | mnop abcd

// Task:
// Write these two functions

// and
// high-order function oper(fct, s) where
// fct is the function of one variable f to apply to the string s(fct will be one of vertMirror, horMirror)

// Examples:
// s = "abcd\nefgh\nijkl\nmnop"

// oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
// oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"



function vertMirror(strng) {
  strng = strng.split('\n')
  
  let s = strng.map(el => el.split('').reverse().join(''))
  
  return s.join('\n')
}

function horMirror(strng) {
  strng = strng.split('\n')

  let cont = []
  
  for(let i = 0; i < strng.length/2; i++) { // => could be simplified by using .reverse()
    cont = strng.slice(0, strng.length/2)
    
    strng[i] = strng[strng.length - 1 - i]
    strng[strng.length - 1 - i] = cont[i]
  } 
  
  return strng.join('\n')
}


function oper(fct, s) {
  return fct(s)
}

console.log(oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"))
// "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw"
console.log(oper(vertMirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx"))
// "EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP"

