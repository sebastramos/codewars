// Your task in this kata is to implement a function that calculates the sum of the integers inside a string.
//  For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.

// Solution 1
function sumOfIntegersInString(s){
  return s.replace(/[^0-9]/g, ' ').split(' ').reduce((a, b) => Number(a) + Number(b))  
}

// Solution 2
function sumOfIntegersInString(s){
  return s.split(/[^0-9]/gi).reduce((a,b) => +a + +b)
}

console.log(sumOfIntegersInString("12.4"))
// 16
console.log(sumOfIntegersInString("h3ll0w0rld"))
// 3
console.log(sumOfIntegersInString("2 + 3 = "))
// 5
console.log(sumOfIntegersInString("Our company made approximately 1 million in gross revenue last quarter."))
// 1
console.log(sumOfIntegersInString("The Great Depression lasted from 1929 to 1939."))
// 3868
console.log(sumOfIntegersInString("Dogs are our best friends."))
// 0
console.log(sumOfIntegersInString("C4t5 are 4m4z1ng."))
// 18
console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"))
// 3635