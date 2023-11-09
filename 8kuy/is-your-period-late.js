// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength.
// Otherwise, return false.


function periodIsLate(last, today, cycleLength) {
  const day = 1000 * 60 * 60 * 24
  return (today - last) / day > cycleLength
}

// 1 sec = 1000 msec
// 1 min = 60 sec
// 1 hour = 60 min
// 1 day = 24 hours

console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35))
// true
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28))
// false