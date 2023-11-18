// Write a method that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

String.prototype.camelCase=function(){
  return this.split(' ').map(word => {
   return word.charAt(0).toUpperCase() + word.slice(1)
 }).join('')
}

console.log("test case".camelCase())
// "TestCase"
console.log("camel Case method".camelCase())
// "CamelCaseMethod"
console.log("say hello".camelCase())
// "SayHello"
console.log("camel case word".camelCase())
// "CamelCaseWord"
console.log("".camelCase())
// ""