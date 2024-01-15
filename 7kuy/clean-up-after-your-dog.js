// You have stumbled across the divine pleasure that is owning a dog and a garden.
// Now time to pick up all the cr@p! :D

// Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

// You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap).
// If there are no bags then you can't pick anything up, so you can ignore cap.

// You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

// If you do, return 'Clean', else return 'Cr@p'.

// Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. 
// If he is there you need to return 'Dog!!'.

// Solution 1
function crap(x, bags, cap){
	if(x.some(e => e.includes('D'))) {
  	return 'Dog!!'
  } else {
  	let space = bags * cap
    let crapCount = 0
    x.map(e => e.map(e => e === '@' ? crapCount++ : e))
    return crapCount > space ? 'Cr@p' : 'Clean'
  }
}

// Solution 2
function crap(x, bags, cap){
  let garden = x.flat()
  let bagSpace = bags * cap
  let numbCrap = garden.filter(val => val === '@').length
  
  return garden.includes('D') ? 'Dog!!' : bagSpace - numbCrap > 0 ? 'Clean' : 'Cr@p'
}

console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2))
// "Clean"
console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1))
// "Cr@p"
console.log(crap([['_','_'], ['_','@'], ['D','_']], 2, 2))
// "Dog!!"