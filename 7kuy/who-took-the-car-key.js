// You woke up from a massive headache and can't seem to find your car key.
// You find a note with a clue that says:

// "If you're reading this then I have left the state and am well on my way to freedom.
// Just to make things interesting, I have also provided something for you to track me with.
// Let the chase begin..."

// Given an array of binary numbers, figure out and return the culprit's message to find out who took the missing car key.


// Solution 1
function whoTookTheCarKey(message) {
  let result = ''
  let decimal
  let utf8
  
  for(let i = 0; i < message.length; i++) {
    decimal = parseInt(message[i], 2)
    console.log(typeof decimal)
    
    utf8 = String.fromCharCode(decimal)
    console.log(typeof utf8)
    result += utf8
  }
    return result
  }
  
  // Solution 2
  function whoTookTheCarKey(message) {
    return message.map(el => String.fromCharCode((parseInt(el, 2)))).join('')
  }

  console.log(whoTookTheCarKey(['01000001', '01101100', '01100101', '01111000', '01100001', '01101110', '01100100', '01100101', '01110010']))
  // 'Alexander'
  