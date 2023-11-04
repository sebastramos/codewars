// Every Friday and Saturday night, farmer counts amount of sheep returned back to his farm 
// (sheep returned on Friday stay and don't leave for a weekend).

// Sheep return in groups each of the days -> you will be given two arrays with these numbers (one for Friday and one for Saturday night). 
// Entries are always positive ints, higher than zero.

// Farmer knows the total amount of sheep, this is a third parameter. 
// You need to return the amount of sheep lost (not returned to the farm) after final sheep counting on Saturday.

// Solution 1
function lostSheep(friday,saturday,total){
	let returnSheeps = [...friday,...saturday].reduce((a,b) => a + b,0)
  return total - returnSheeps 
}

// Solution 2
function lostSheep(friday,saturday,total){
	friday = friday.reduce((a,b) => a + b,0)
  saturday = saturday.reduce((a,b) => a + b,0)
  return total - (saturday + friday)
}


console.log(lostSheep([1,2],[3,4],15))
// 5
console.log(lostSheep([3,1,2],[4,5],21))
// 6
console.log(lostSheep([5,1,4],[5,4],29))
// 10
console.log(lostSheep([11,23,3,4,15],[7,14,9,21,15],300))
// 178
console.log(lostSheep([2,7,13,17],[23,56,44,12,1,2,1,],255))
// 77
console.log(lostSheep([2,5,8],[11,23,3,4,15,112,12,4],355))
// 156
console.log(lostSheep([1,1,1,2,1,2],[2,1,2,1,2,1],30))
// 13
console.log(lostSheep([5,10,15],[11,23,3,4,15],89))
// 3
console.log(lostSheep([3,6,9,12],[3,2,1,2,3,1],44))
// 2
console.log(lostSheep([],[],15))
// 15