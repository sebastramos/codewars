// A person's full name is usually composed of a first name, middle name and last name;
// however in some cultures (for example in South India) there may be more than one middle name.

// Write a function that takes the full name of a person, and returns the initials, separated by dots ('.').
// The initials must be uppercase.
// The last name of the person must appear in full, with its first letter in uppercase as well.

// See the pattern below:

// "code wars"
// "C.Wars"

// "Barack hussein obama"
// "B.H.Obama"

// Names in the full name are separated by exactly one space (' ' ) ; without leading or trailing spaces.
// Names will always be lowercase, except optionally their first letter.

function initials(n){
	n = n.split(' ')
  let middle = n.slice(0, n.length - 1).map(e => e[0].toUpperCase() + '.').join('')
  let lastNm = n[n.length - 1]
  let lastNmMaj = lastNm[0].toUpperCase() + lastNm.slice(1)
  
  return middle + lastNmMaj
  
}

console.log(initials('code wars'))
// 'C.Wars'
console.log(initials('Barack hussain obama'))
// 'B.H.Obama'
console.log(initials('barack hussain Obama'))
// 'B.H.Obama'