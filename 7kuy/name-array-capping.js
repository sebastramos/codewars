// Create a method that accepts an array of names, 
// and returns an array of each name with its first letter capitalized.

// Solution 1
function capMe(arr) {
	const firstLetterCapitalized = arr.map(el => el[0].toUpperCase() + el.slice(1).toLowerCase())
  
  return firstLetterCapitalized
}

// Solution 2
function capMe(arr) {
	const firstLetterCapitalized = arr.map(el => el.charAt(0).toUpperCase() + el.substring(1).toLowerCase())
  
  return firstLetterCapitalized
}

console.log(capMe(['jo', 'nelson', 'jurie']))
// returns ['Jo', 'Nelson', 'Jurie']
console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']))
// returns ['Karly', 'Daniel', 'Kelsey']
