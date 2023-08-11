// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

function nextId(ids){
  let i = 0
  while (ids.includes(i)){
    i++
  }
  return i
}


  // Returns the lowestNextId
    console.log(nextId([0,1,2,3,5]))
    // 4
    
  // Returns the lowestNextId
    console.log(nextId([0,1,2,3,4,5,6,7,8,9,10]))
    // 11
    
  // Returns the lowestNextId - unsorted input with duplicates
    console.log(nextId([1,2,0,2,3,5]))
    // 4