// Write the definition of the function "say" such that calling this:

const say = function(string1) {
  return function(string2) {
    return string1 + ' ' + string2
  }
}


console.log(say("Hello")("World"))
// "Hello World"