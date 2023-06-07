// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Given a year, return the century it is in.


// My solution
function century(year) {
 let cent = Math.floor(year / 100) + 0.01 
 cent = Math.floor(cent * 100)
 
 if (year > cent) {
 	year = Math.floor(year / 100) + 1
 } else {
  year = Math.ceil(year / 100)
 } 
 return year ;
}


// Simpler and better solution 

// const century = year => Math.ceil(year/100)