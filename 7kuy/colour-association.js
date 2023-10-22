// Colour plays an important role in our lifes.
//Most of us like this colour better then another.
// User experience specialists believe that certain colours have certain psychological meanings for us.

// You are given a 2D array, composed of a colour and its 'common' association in each array element.
// The function you will write needs to return the colour as 'key' and association as its 'value'.

// Solution 1
function colourAssociation(array){
  let res = []
    for(let i = 0; i < array.length; i++) {
      res.push({[array[i][0]]: array[i][1]})
    }
    return res
  }
  
  // Solution 2
  function colourAssociation(array) {
    return array.map(value => Object.fromEntries([value]))
  } 
  
  // Solution 3
  function colourAssociation(array){
    return array.map(([a, b]) => ({[a]: b}))
  }
   
  console.log(colourAssociation([["white", "goodness"],
                                 ["blue", "tranquility"]]))
                                 
  /* 
  [{white:"goodness"},
  {blue:"tranquility"}] 
  */
  
  console.log(colourAssociation([["red", "energy"],
                                 ["yellow", "creativity"],
                                 ["brown" , "friendly"],
                                 ["green", "growth"]]))
                                 
  /* 
  [{red: "energy"},
  {yellow: "creativity"},
  {brown: "friendly"},
  {green: "growth"}] 
  */