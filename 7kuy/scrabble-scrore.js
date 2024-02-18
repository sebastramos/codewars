// Write a program that, given a word, computes the scrabble score for that word.

// Letter Values
// You'll need these:

// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10

// "cabbage" --> 14
// "cabbage" should be scored as worth 14 points:

// 3 + 2*1 + 2*3 + 2 + 1 = 3 + 2 + 6 + 3 = 14

// Empty string should return 0.
// The string can contain spaces and letters (upper and lower case), you should calculate the scrabble score only of the letters in that string.


function scrabbleScore(str){
  let group1 = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't']
 let group2 = ['d', 'g']
 let group3 = ['b', 'c', 'm', 'p']
 let group4 = ['f', 'h', 'v', 'w', 'y']
 let group5 = ['k']
 let group6 = ['j', 'x']
 let group7 = ['q', 'z']
 
 str = str.split('').map(e => e.toLowerCase())
 
 let count = 0
 
 for(let i = 0; i < str.length; i++) {
   if(group1.includes(str[i])) {
     count += 1  	
   } else if(group2.includes(str[i])) {
     count += 2  	
   } else if(group3.includes(str[i])) {
     count += 3  	
   } else if(group4.includes(str[i])) {
     count += 4  	
   } else if(group5.includes(str[i])) {
     count += 5 	
   } else if(group6.includes(str[i])) {
     count += 8  	
   } else if(group7.includes(str[i])) {
     count += 10  	
   }
 }
 
 return count
}

console.log(scrabbleScore(""))
// 0
console.log(scrabbleScore("STREET"))
// 6
console.log(scrabbleScore("st re et"))
// 6
console.log(scrabbleScore("ca bba g  e"))
// 14
