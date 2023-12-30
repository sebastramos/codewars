// Implement a function which takes a sequence of objects and a property name, and returns a sequence containing the named property of each object.

// If an object is missing the property, you should just leave it as undefined/None in the output array.

// pluck([{a:1}, {a:2}], 'a')      // -> [1,2]
// pluck([{a:1, b:3}, {a:2}], 'b') // -> [3, undefined]


function pluck(objs, name) {
	let result = []
	for(let i = 0; i < objs.length; i++) {
  	if(objs[i].hasOwnProperty(name)) {
    	result.push(objs[i][name])
    } else {
    	result.push(undefined)
    }
  }
  	return result
}

console.log(pluck([{a:1}, {a:2}], 'a'))
// [1,2]
console.log(pluck([{a:1, b:3}, {a:2}], 'b'))
// [3, undefined]