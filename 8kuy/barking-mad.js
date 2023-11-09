// Teach snoopy and scooby doo how to bark using object methods.
// Currently only snoopy can bark and not scooby doo.

// Use method prototypes to enable all Dogs to bark.

// Solution 1 (using prototypes)
function Dog (breed) {
  this.breed = breed
}

const snoopy = new Dog("Beagle")

Dog.prototype.bark = function() {
  return "Woof";
}

const scoobydoo = new Dog("Great Dane")



// Solution 2 (using class)
class Dog {
	contructor(breed) {
  	this.breed = breed
  }
  bark() {
  	return "Woof"
	}
}

const snoopy = new Dog("Beagle")
const scoobydoo = new Dog("Great Dane")


console.log(snoopy.bark()) 
console.log(scoobydoo.bark())
