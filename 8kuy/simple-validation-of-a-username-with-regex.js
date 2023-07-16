// Write a simple regex to validate a username. 
// Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).


// Solution 1
function validateUsr(username) {
  res = /^[a-z0-9_]{4,16}$/.test(username)
  return res
}

console.log(validateUsr('asddsa'))
// true

// ^ 		     Start from the beginning of the string
// []   		 Allow any character specified
// a-z  		 Anything from a to z
// 0-9  		 Anything from 0 to 9
// _		 		 Underscore
// {4, 16}   Accept 4 to 16 of allowed character, both included
// $   			 End the string rigth after specified amount of allowed character is given
