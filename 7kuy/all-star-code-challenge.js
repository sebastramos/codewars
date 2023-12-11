// Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

// Any remaining seconds left over are ignored.

// The string output needs to be in the specific form - "X hour(s) and X minute(s)"

function toTime(sec) {
    let hour = Math.floor(sec / 3600)
    let second = Math.floor(sec/60)
      return `${hour} hour(s) and ${second >= 60 ? second % 60: second} minute(s)`
  }
  
  console.log(toTime(3600))
  // "1 hour(s) and 0 minute(s)"
  console.log(toTime(3601))
  // "1 hour(s) and 0 minute(s)"
  console.log(toTime(3500))
  // "0 hour(s) and 58 minute(s)"
  console.log(toTime(323500))
  // "89 hour(s) and 51 minute(s)"
  