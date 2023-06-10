// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

function findNeedle(haystack) {
	for(let i = 1; i < haystack.length; i++)
  	if(haystack[i] === 'needle') {
    	return `Found the needle at position ${i}`
    }
}

console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))


/* Better solution

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

*/