// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health.

// Health can't be less than 0.

// Solution 1
function combat(health, damage) {
	let actualHealth = health - damage
	return actualHealth < 0 ? 0 :  actualHealth
}

// Solution 2
function combat(health, damage) {
	return health < damage ? 0 : health - damage
}


console.log(combat(100, 5))
// 95
console.log(combat(92, 8))
// 84
console.log(combat(20, 30))
// 0
