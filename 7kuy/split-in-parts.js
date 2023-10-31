// You're in a restaurant with your friends and it's time to go, but there's still one big problem...the bill.
// Who will pay what? 
// Lucky for you, you've got your computer handy!
// One simple function and the bill is paid——fairly, too!

// The function should take one parameter: an object with two or more name-value pairs that represent the members of the group and the amount spent by each.

// Your function should return an object with the same names, showing how much money the members should pay or receive.

// Further points:

// The values should be positive numbers if the person should receive money from the group, 
// negative numbers if they owe money to the group.

// If value is a decimal, round to two decimal places.

// Example
// 3 friends go out together: A spends £20, B spends £15, and C spends £10.
// The function should return an object showing that A should receive £5, B should receive £0, and C should pay £5.


function splitTheBill(x) {
	let averageBill = Object.values(x).reduce((a,b) => a + b, 0) / Object.keys(x).length
  
  for(const friend in x) {
  	if ((x[friend] - averageBill) % 1 !== 0) {
    	x[friend] = Number((x[friend] - averageBill).toFixed(2))
    } else {
    	x[friend] = Number(x[friend] - averageBill)
    }
  }
  return x
}

console.log(splitTheBill({A: 20, B: 15, C: 10}))
// {A: 5, B: 0, C: -5}
console.log(splitTheBill({A: 40, B: 25, X: 10}))
// {A: 15, B: 0, X: -15}
console.log(splitTheBill({ A: 232.60, B: 141.63, C: -19.43, D: -131.43, E: -223.43 }))