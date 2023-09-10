// Implement String#digit? which should return true if given object is a digit (0-9), false otherwise.

String.prototype.digit = function() {
  return /^\d$/.test(this)
}

console.log(''.digit())
// false
console.log('7'.digit())
// true
console.log(' '.digit())
// false
console.log('a'.digit())
// false
console.log('a5'.digit())
// false
console.log('14'.digit())
// false