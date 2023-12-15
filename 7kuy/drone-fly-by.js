// The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

// In this kata we will recreate that stunt... sort of.

// You will be given two strings: lamps and drone.
// lamps represents a row of lamps, currently off, each represented by x.
// When these lamps are on, they should be represented by o.

// The drone string represents the position of the drone T and its flight path up until this point =.
// The drone always flies left to right, and always begins at the start of the row of lamps.
// Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

// Return the resulting lamps string.

// Solution 1
function flyBy(lamps, drone){
	let on = drone.length
  let result = ''
  for(let i = 0, j= 0; i < lamps.length; i++) {
  	if(i < on) {
    	result += 'o'
    } else {
    	result += 'x'
    }
	}
  return result
}

// Solution 2
const flyBy = (lamps, drone) => [...lamps].fill('o', 0, drone.length).join('')

console.log(flyBy('x', '=T'))
// 'o'
console.log(flyBy('xxxxxx', '====T'))
// 'ooooox'
console.log(flyBy('xxxxxxxxx', '==T'))
// 'oooxxxxxx'
console.log(flyBy('xxxxxxxxxxxxxxx', '=========T'))
// 'ooooooooooxxxxx'