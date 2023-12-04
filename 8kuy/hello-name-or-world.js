// Define a method hello that returns "Hello, Name!" to a given name, 
// or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Solution 1
function hello(name) {
  return (name === '' || name === undefined) ? 'Hello, World!' : `Hello, ${name.charAt(0).toUpperCase() + name.toLowerCase().substr(1)}!`
}

// Solution 2
const hello = s =>
  `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`
  
// Solution 3
function hello(name) {
  if(name) {
  	return `Hello, ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`
  } else {
  	return 'Hello, World!'
  }
}

console.log(hello("john"))
// "Hello, John!"
console.log(hello("aliCE"))
// "Hello, Alice!"
console.log(hello(''))
// "Hello, World!"
console.log(hello())