// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(num) {
   return String(num).split('').reverse()
}

console.log(digitize(2000))