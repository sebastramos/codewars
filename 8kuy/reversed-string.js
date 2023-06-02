// Complete the solution so that it reverses the string passed into it.

function solution(str){
  // declare a backward variable
  let strBackward = ''
  // loop 
  for(let i = 1; i <= str.length; i++)
    // return the letter
    // increase the number for the negative selection (i)
    strBackward += str.charAt(str.length -i)
    return strBackward
}