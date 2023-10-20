// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
// The list is ordered according to who signed up first.

// Your task is to return one of the following strings:

// < firstName here >, < country here > of the first Python developer who has signed up; 
// or
// There will be no Python developers if no Python developer has signed up.

// For example, given the following input array:

// Notes:
// The input array will always be valid and formatted as in the example above.

function getFirstPython(list) {
	const dev = list.find(el => el.language === "Python")
  
  return dev ? `${dev.firstName}, ${dev.country}` : 'There will be no Python developers'
}

let list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
]

let list2 = [
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
]

console.log(getFirstPython(list1))
// 'Victoria, Puerto Rico'
console.log(getFirstPython(list2))
// 'There will be no Python developers'