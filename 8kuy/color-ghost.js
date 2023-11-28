// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"


let Ghost = function() {
  let colors = ["white", "yellow", "purple", "red"]
  let randomNum = Math.floor(Math.random() * 4)
  this.color = colors[randomNum]
}