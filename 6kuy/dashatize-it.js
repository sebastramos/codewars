// If n is an integer, 
// Return a string with dash'-'marks before and after each odd integer,
// but do not begin or end the string with a dash mark.

// If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

function dashatize(num) {
  let dashed = Math.abs(num).toString().split('').map(a => +a % 2 === 1 ? '-' + a + '-': a).join('')
  if (dashed[0] === '-') {
    dashed = dashed.slice(1)
  } 
  if (dashed[dashed.length-1] === '-') {
    dashed = dashed.slice(0, dashed.length - 1)
  }
  for(let i = 0; i < dashed.length - 1; i++) {
    if (dashed[i] === '-') {
      if (dashed[i + 1] === '-') {
        dashed = dashed.substring(0, i + 1) + dashed.substring(i + 2)
      }
    }
  }
  return dashed
}

console.log(dashatize(274))
// '2-7-4'
console.log(dashatize(6815))
// '68-1-5'
console.log(dashatize(5311))
// "5-3-1-1"
console.log(dashatize(86320))
// "86-3-20"
console.log(dashatize(974302))
// "9-7-4-3-02"
console.log(dashatize(NaN))
// "NaN"
console.log(dashatize(0))
// "0"
console.log(dashatize(-1))
// "1"
console.log(dashatize(-28369))
// "28-3-6-9"