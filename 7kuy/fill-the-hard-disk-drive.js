// Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive.
// The files must be saved in the order they appear in the queue.

// Zero size files can always be saved even HD full.

// input
// Array of file sizes (0 <= s <= 100)
// Capacity of the HD (0 <= c <= 500)

// output
// Number of files that can be fully saved in the HD.

// Do not expect any negative or invalid inputs.

// Solution 1
function save(sizes, hd) {
	let fileCounter = 0
  
  for(let i = 0, files = 0, verify = 0; i < sizes.length; i++) {
  	if(verify <= hd) {
    	verify += sizes[i]
      if(verify <= hd) {
        files += sizes[i]
        fileCounter++
      }
    }
  }
  return fileCounter
}

// Solution 2
function save(sizes, hd) {
    let i = -1
    
    while (hd >=0) {
      hd -= sizes.shift()
      i++
    }
    return i
}

console.log(save([4, 4, 4, 3, 3], 12))
// 3
console.log(save([4, 4, 4, 3, 3], 11))
// 2
console.log(save([4, 8, 15, 16, 23, 42], 108))
// 6
console.log(save([13], 13))
// 1
console.log(save([1, 2, 3, 4], 250))
// 4
console.log(save([100], 500))
// 1
console.log(save([11, 13, 15, 17, 19], 8))
// 0
console.log(save([45], 12))
// 0