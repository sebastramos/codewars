// Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. 
// You have travelled a total of 3 + 6 = 9 floors of distance.

/// Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.

// if two consecutive floors are the same,
// distance travelled between them is 0

// Array will always contain at least 2 floors.
// Random tests will contain 2-20 elements in array, and floor values between 0 and 30.

function elevatorDistance(n) {
	let countFloor = 0
  
  for(let i = 1; i < n.length; i++) {
		if(n[i-1] > n[i]) {
    	countFloor += n[i-1] - n[i]
    } else {
    	countFloor += n[i] - n[i-1]
    }
  }
  return countFloor
}

console.log(elevatorDistance([5,2,8]))
// 9
console.log(elevatorDistance([1,2,3]))
// 2
console.log(elevatorDistance([7,1,7,1]))
// 18
console.log(elevatorDistance([3,3]))
// 0