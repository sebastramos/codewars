// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

/*
h = 0
m = 1
s = 1

result = 61000

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
*/

function past(h, m, s){
  if ( h >= 0 && h <= 23 && m >= 0 && m <= 59 && s >= 0 && s <= 59) {
    h *= 3600000 
    m *= 60000
    s *= 1000
    return h + m + s
    }
    return 'Please enter no negative input or wrong time input'
  }
  
  console.log(past(10, 2, 60))
  