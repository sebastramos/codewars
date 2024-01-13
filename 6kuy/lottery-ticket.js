// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket.
// Each subarray has both a string and a number within it.
// If the character code of any of the characters in the string matches the number, you get a mini win.
// Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win).
// If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.

function bingo(ticket, win){
	
    let letters = ticket.map(e => e[0].split(''))
    
    let miniWins = 0
    for(let i = 0; i < letters.length; i++) {
          for(let j = 0; j < letters[i].length; j++) {
          if(letters[i][j].charCodeAt() === ticket[i][1]) {
            miniWins++
          break
        }
      }
    }
      return miniWins >= win ? 'Winner!' : 'Loser!'
  }
  
  
  console.log(bingo([['QDAFQN' ,75], ['NBSIP' ,80], ['RINOO' ,67], ['EKSL' ,81], ['DZI' ,66], ['DAM' ,84]], 1))
  // 'Winner!'
  console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2))
  // 'Loser!'
  console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1))
  // 'Winner!'
  console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3))
  // 'Loser!'