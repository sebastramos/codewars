// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true 
// if at least one Ruby developer has signed up

// false
// if there will be no Ruby developers.

// Notes:
// The input array will always be valid and formatted as in the example above.

// Solution 1
function isRubyComing(list) {
	let result = []
	for(let obj in list) {
  	if(list[obj].language.includes('Ruby')) {
    	return true
    	}
    }
  return false
}

// Solution 2
function isRubyComing(list) {
  return list.some(el => el.language === 'Ruby');
}

var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

var list2 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' } 
];

console.log(isRubyComing(list1))
console.log(isRubyComing(list2))
// true.
