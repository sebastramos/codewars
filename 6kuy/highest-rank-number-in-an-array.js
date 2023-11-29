// Complete the method which returns the number which is most frequent in the given input array. 
// If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

function highestRank(arr){
	
  let count = {}
	
  arr.map(n => {
  	if(Object.hasOwn(count,n)) {
    	count[n]++
    } else {
    	count[n] = 1
    }
  })
  
 let keys = Object.keys(count) // transform to an array
 let highest = 0
 let key
 
 keys.forEach(elem => {
    if(count[elem] >= highest) {
       highest = count[elem]
       key = elem
    }
  })
  return +key
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]))
// 12
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]))
// 12
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]))
// 3