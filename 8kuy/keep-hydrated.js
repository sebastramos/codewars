//  Nathan drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours 
// you need to return the number of litres Nathan will drink, 
// rounded to the smallest value.

function litres(time) {
	let drink = Math.floor(0.5 * time)
  return drink;
}

console.log(litres(3))
console.log(litres(6.7))
console.log(litres(11.8))