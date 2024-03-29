// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters.
// The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight.
// When the left side wins return Left side wins!,
// when the right side wins return Right side wins!,
// in other case return Let's fight again!.

// The left side letters and their power:
/* 
 w - 4
 p - 3
 b - 2
 s - 1
*/

// The right side letters and their power:
/* 
 m - 4
 q - 3
 d - 2
 z - 1
*/

// The other letters don't have power and are only victims.


// Solution 1
function alphabetWar(fight) {
  
  let countLeftist = 0
  let countRightist = 0
  
	for (let i = 0; i < fight.length; i++) {
 		if (fight[i]=== 'w') {
    	countLeftist += 4
    } else if (fight[i] === 'p') {
      countLeftist += 3
    } else if (fight[i] === 'b') {
    	countLeftist += 2
    } else if (fight[i] === 's') {
    	countLeftist += 1
    } else if (fight[i] === 'm' ) {
    	countRightist += 4
    } else if (fight[i] === 'q') {
      countRightist += 3
    } else if (fight[i] === 'd') {
    	countRightist += 2
    } else if (fight[i] === 'z') {
    	countRightist += 1
    }
  }
  
	if (countLeftist > countRightist) {
   	return "Left side wins!"
  } else if (countLeftist < countRightist) {
  	return "Right side wins!" 
  } else {
  	return "Let\'s fight again!"
  }
}


// Solution 2
function alphabetWar(fight){
  const leftSide = {
     "w": 4,
     "p": 3,
     "b": 2,
     "s": 1
   };
 
   const rightSide = {
     "m": 4,
     "q": 3,
     "d": 2,
     "z": 1
   };
 
   let rightCount = 0;
   let leftCount = 0;
 
   for(let char of fight){
     
     if(char in leftSide){
        leftCount += leftSide[char];
     }
 
     if(char in rightSide){
        rightCount += rightSide[char];
     }
   }
 
     if(leftCount > rightCount){
       return "Left side wins!";
     }
  
     if (leftCount < rightCount){
       return "Right side wins!"; 
     }
     
     return "Let's fight again!";
 }




console.log(alphabetWar("z"))  
// Right side wins!
console.log(alphabetWar("zdqmwpbs"))
// Let's fight again!
console.log(alphabetWar("zzzzs"))
// Right side wins!
console.log(alphabetWar("wwwwwwz"))
// Left side wins! 
