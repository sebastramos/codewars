// The queen can be moved any number of unoccupied squares in a straight line vertically, horizontally, or diagonally, thus combining the moves of the rook and bishop. 

// The queen captures by occupying the square on which an enemy piece sits. 

// Task:
// Write a function availableMoves(position) which returns possibly moves of chess queen.
// Returned value should be an array with possible moves sorted alphabetically, exluded starting position.

// For example when input position is A1 return value should be:

// ["A2", "A3", "A4", "A5", "A6", "A7", "A8", "B1", "B2", "C1", "C3", "D1", "D4", "E1", "E5", "F1", "F6", "G1", "G7", "H1", "H8"]

/* 
     A   B   C   D   E   F   G   H
   + - + - + - + - + - + - + - + - +
1  |   |   |   |   |   |   | x |   |
   + - + - + - + - + - + - + - + - +
2  |   |   |   |   |   | x |   |   |
   + - + - + - + - + - + - + - + - +
3  |   |   |   |   | x |   |   |   |
   + - + - + - + - + - + - + - + - +
4  |   |   |   | 0 |   |   |   |   |
   + - + - + - + - + - + - + - + - +
5  |   |   | x |   |   |   |   |   |
   + - + - + - + - + - + - + - + - +
6  |   | x |   |   |   |   |   |   |
   + - + - + - + - + - + - + - + - +
7  | x |   |   |   |   |   |   |   |
   + - + - + - + - + - + - + - + - +
8  |   |   |   |   |   |   |   |   |
   + - + - + - + - + - + - + - + - +
   
 */
 
 // A7 B6 C5 [D4] E3
 
// Q = queen
// x = available move

function availableMoves(position) {

	let width = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
	let heigth = ['1', '2', '3', '4', '5', '6', '7', '8']
    
	let vPosition = position.split('')[0] 
  let hPosition = position.split('')[1] 
  
  function movement() {
 
    let horizontal = width.filter(el => el !== vPosition).map(el => el.concat(hPosition))
   	console.log(horizontal)
   
   	let vertical = heigth.filter(el => el !== hPosition).map(el => vPosition.concat(el))
    console.log(vertical)
    
    // let diagonal => function()
    // loop 
    let diaRigth = []
    for(let i = 0; i < width.length; i++) {
    	diaRigth.push(width[i].concat(heigth[i]))
    }
    console.log(diaRigth.filter(el => el !== position))
    
    
    // WIP DIAGONAL LEFT
    //let diaLeft = []
    //let diaLeft = + width.indexOf(vPosition)
    
    // Revenir a A pour ensuite aller jusque H
   // combien il faut pour arriver au bout (8)
  console.log(horizontal.concat(vertical,diaRigth).sort())
  }
  
  movement()
  
}

availableMoves('A1')
