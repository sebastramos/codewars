// back·ro·nym
// An acronym deliberately formed from a phrase whose initial letters spell out a particular word or words, either to create a memorable name or as a fanciful explanation of a word's origin.

// "Biodiversity Serving Our Nation", or BISON

// Complete the function to create backronyms.
// Transform the given string (without spaces) to a backronym, using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).

// The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words, for example:



const makeBackronym = function(string){
	let dict = { 'A': "awesome",
						 'B': 'beautiful',
             'C': 'confident',
             'D': 'disturbing',
             'E': 'eager',
             'F': 'fantastic',
             'G': 'gregarious',
             'H': 'hippy',
             'I': 'ingestable',
             'J': 'joke',
             'K': 'klingon',
             'L': 'literal',
             'M': 'mustache',
             'N': 'newtonian',
             'O': 'oscillating',
             'P': 'perfect',
             'Q': 'queen',
             'R': 'rant',
             'S': 'stylish',
             'T': 'turn',
             'U': 'underlying',
             'V': 'volcano',
             'W': 'weird',
             'X': 'xylophone',
             'Y': 'yogic',
             'Z': 'zero' 
             }

	return string.split('')
  				 .map(e => e.toUpperCase())
                 .map(e => dict.hasOwnProperty(e) ? dict[e] : e)
                 .join(' ')
}


console.log(makeBackronym('dgm'))
// 'disturbing gregarious mustache'
console.log(makeBackronym('lkj'))
// 'literal klingon joke'
console.log(makeBackronym('interesting'))
// 'ingestable newtonian turn eager rant eager stylish turn ingestable newtonian gregarious'
console.log(makeBackronym('codewars'))
// 'confident oscillating disturbing eager weird awesome rant stylish'