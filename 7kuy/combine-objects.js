// Your task is to write a function that takes two or more objects 
// and returns a new object which combines all the input objects.

// All input object properties will have only numeric values.
// Objects are combined together so that the values of matching keys are added together.

// The combine function should be a good citizen, so should not mutate the input objects.



const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }

function combine(objA, objB) {
	let obj = {}
  
  for(let i = 0; i < arguments.length; i++) {
  	for(let key in arguments[i]) {
    	obj[key] = obj[key] ? obj[key] + arguments[i][key] : arguments[i][key]
    }
  }
  return obj
}

console.log(combine(objA, objB))
// { a: 13, b: 20, c: 36, d: 3 }
