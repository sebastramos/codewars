// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

// a boolean true if all rotations of strng are included in arr
// false otherwise

// Note:
// Though not correct in a mathematical sense

// we will consider that there are no rotations of strng == ""
// and for any array arr: contain_all_rots("", arr) --> true

function containAllRots(strng, arr) {
	// calculate a rotation and add and push to an array allRots
  strng = strng.split('')
  
  let allRots = []
  for(let i = strng.length - 1; i >= 0; i--) {
   	let lastElement = strng.pop()
    strng.unshift(lastElement)
    allRots.push(strng.join(''))
   }
    
  let truth = []
  for(let i = 0; i < allRots.length; i++) {
  	if(arr.includes(allRots[i])) {
    	truth.push(true)
    }
  }
  
  return truth.length === allRots.length ? true : false
}

console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]))
// true

console.log(containAllRots("Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]))
// false
