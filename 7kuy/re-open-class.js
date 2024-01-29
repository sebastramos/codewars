// Javascript let you re-open classes so you can add new functionalities to existing classes and objects.

// To demonstrate this, you'll have to add a new method myNewMethod into the String class that simply calls the upcase method toUpperCase() in JS, so that:


String.prototype.myNewMethod = function() {
	return this.toUpperCase()
}

console.log('abc'.myNewMethod())
// 'ABC'