// You are a leader of a small pirate crew. And you have a plan.
// With the help of OOP you wish to make a pretty efficient system to identify ships with heavy booty on board!

// Unfortunately for you, people weigh a lot these days, so how do you know if a ship is full of gold and not people?

// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

// You have access to the ship "draft" and "crew".
// "draft" is the total ship weight and
// "crew" is the number of humans on the ship.

// Each crew member adds 1.5 units to the ship draft.
// If after removing the weight of the crew, the draft is still more than 20, then the ship is worth looting. 
// Any ship weighing that much must have a lot of booty!

// Add the method
// isWorthIt
// to decide if the ship is worthy to loot.

// titanic.isWorthIt() // return false

class Ship {
	constructor(draft, crew) {
  	this._draft = draft
    this._crew = crew
  }
  isWorthIt() {
  	return this._draft - (this._crew * 1.5) > 20
  }
}


const titanic = new Ship(15, 10)
console.log(titanic.isWorthIt())
const emptyShip = new Ship(0,0)
console.log(emptyShip.isWorthIt())
const aWorthyShip = new Ship(100,20)
console.log(aWorthyShip.isWorthIt())
