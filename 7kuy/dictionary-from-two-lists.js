// There are two lists, possibly of different lengths.
// The first one consists of keys, the second one consists of values.
// Write a function createDict(keys, values) that returns a dictionary created from keys and values.
// If there are not enough values, the rest of keys should have a None (JS null)value.
// If there not enough keys, just ignore the rest of values.

function createDict(keys,values) {
	let obj = {}
  for(let i = 0; i < keys.length; i++) {
  	if(values[i] === undefined) {
    	obj[keys[i]] = null
    } else {
  		obj[keys[i]] = values[i]
    }
  }
  return obj
}

keys = ['a', 'b', 'c', 'd']
values = [1, 2, 3]
console.log(createDict(keys, values))
// returns {'a': 1, 'b': 2, 'c': 3, 'd': null}


keys = ['a', 'b', 'c']
values = [1, 2, 3, 4]
console.log(createDict(keys, values))
// returns {'a': 1, 'b': 2, 'c': 3}