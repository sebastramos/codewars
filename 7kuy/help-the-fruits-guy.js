// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten.
// He wants to replace all the rotten pieces of fruit with fresh ones.
// For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"].
// Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.

// Solution 1
function removeRotten(bagOfFruits){
	if(bagOfFruits === null || bagOfFruits === '' || bagOfFruits === undefined ) {
  	return []
  } else {
		return bagOfFruits.map(el => el.toLowerCase().split('rotten').filter(el => el !== '')).flat()
  }
}

// Solution 2
function removeRotten(bagOfFruits){
    return bagOfFruits && bagOfFruits.length ? bagOfFruits.map(el => el.replace('rotten', '').toLowerCase()) : []
}


console.log(removeRotten(["apple","banana","kiwi","melone","orange"]))
// ["apple","banana","kiwi","melone","orange"])
console.log(removeRotten([]))
// []