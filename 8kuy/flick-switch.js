// Create a function that always returns true for every item in a given list.
// However, if an element is the word "flick", switch to always returning the opposite boolean value.
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.


function flickSwitch(arr){
    let flag = true
    
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === 'flick') {
        flag === false ? flag = true : flag = false
      } 
      arr[i] = flag
    }
    return arr
  }
  
  console.log(flickSwitch(["codewars", "flick", "code", "wars"]))
  // [true, false, false, false]
  console.log(flickSwitch(["flick", "chocolate", "adventure", "sunshine"]))
  // [false, false, false, false]
  console.log(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]))
  // [true, true, false, false, true]
  console.log(flickSwitch(["flick", "flick", "flick", "flick", "flick"]))
  // [false, true, false, true, false]
  console.log(flickSwitch(["bicycle"]))
  // [true]
  console.log(flickSwitch(["flick"]))
  // [false]
  console.log(flickSwitch([]))
  // []
  
  