// Complete the Person object, by completing the FillFriends function to fill the _friends Array for the person object.


/// Return the person object with the Name, Friends and FillFriends function filled out which will fill the input into the Friends property.

let Person = function(){
  let person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {
  			this._friends.push(...f)
    	}
  }
  return person
}

let people = [['bob','john'],['bob','john','dave'],[],['bob','john','dave','matt','alex']]

for(let i=0;i<4;i++){
  let person = Person()
  person.fillFriends(people[i])
  console.log(person._friends, people[i])
}