// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

// a boolean true if all rotations of strng are included in arr
// false otherwise

// Note:
// Though not correct in a mathematical sense

// we will consider that there are no rotations of strng == ""
// and for any array arr: contain_all_rots("", arr) --> true

// Solution 1
function containAllRots(strng, arr) {
	
  strng = strng.split('')
  
  // calculate a rotation and add and push to an array allRots
  let allRots = []
  for(let i = strng.length - 1; i >= 0; i--) {
   	let lastElement = strng.pop()
    strng.unshift(lastElement)
    allRots.push(strng.join(''))
   }
  // calculate how many similare elements between the initial arr and allRots  
  let truth = []
  for(let i = 0; i < allRots.length; i++) {
  	if(arr.includes(allRots[i])) {
    	truth.push(true)
    }
  }
  // compare the length of truth and allRots
  // if they have the same length that means that we can find all rotation's posibilities of 'strng' in the initial 'arr'
  return truth.length === allRots.length ? true : false
}

// Solution 2

console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]))
// true

console.log(containAllRots("Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]))
// false
