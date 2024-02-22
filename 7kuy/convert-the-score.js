// You are working at a lower league football stadium and you've been tasked with automating the scoreboard.

// The referee will shout out the score, you have already set up the voice recognition module which turns the ref's voice into a string, but the spoken score needs to be converted into a pair for the scoreboard!

// e.g. "The score is four nil" should return [4,0]

// Either teams score has a range of 0-9, and the ref won't say the same string every time e.g.

// "new score: two three"
  
// "two two"
  
// "Arsenal just conceded another goal, two nil"
// Note:

// Please return an array

// Solution 1
function scoreboard(string) {
	string = string.split(' ')
  let result = []
  
  const recognition = {
  	'nil': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
  }
  
  for(let i = 0; i < string.length; i++) {
  	if(recognition.hasOwnProperty(string[i]))	{
    	result.push(recognition[string[i]])
    }
  }
  return result
}

// Solution 2
function scoreboard(string) {
  let arr = string.split(' ')
  let a = ['nil','one','two','three','four','five','six','seven','eight','nine']
  return [a.indexOf(arr[arr.length-2]), a.indexOf(arr[arr.length-1])]
}

console.log(scoreboard("The score is four nil"))
// [4,0]
console.log(scoreboard("new score: two three"))
// [2,3]
console.log(scoreboard("two two"))
// [2,2]
console.log(scoreboard("Arsenal just conceded another goal, two nil"))
// [2,0]