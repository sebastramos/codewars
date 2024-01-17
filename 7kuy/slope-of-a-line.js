// Your challenge is to write a function named getSlope that calculates the slope of the line through two points.

// Each point that the function takes in is an array 2 elements long. 
// The first number is the x coordinate and the second number is the y coordinate.
// If the line through the two points is vertical or if the same point is given twice, the function should return null.

function getSlope(p1, p2) {

    let deltaX = p2[0] - p1[0]
    let deltaY = p2[1] - p1[1]
    if (deltaX === 0) {
      return null
    }
    return deltaY / deltaX
  }
  
  console.log(getSlope([1,1],[2,2]))
  // 1
  console.log(getSlope([11,1],[1,11]))
  // -1
  console.log(getSlope([1,1],[1,2]))
  // null
  console.log(getSlope([1,1],[1,1]))
  // null
  