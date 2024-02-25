// A new school year is approaching, which also means students will be taking tests.

// The tests in this kata are to be graded in different ways.
// A certain number of points will be given for each correct answer and a certain number of points will be deducted for each incorrect answer.
// For ommitted answers, points will either be awarded, deducted, or no points will be given at all.

// Return the number of points someone has scored on varying tests of different lengths.

// The given parameters will be:

// An array containing a series of 0s, 1s, and 2s, 
// 0 is a correct answer, 
// 1 is an omitted answer, 
// 2 is an incorrect answer.

// The points awarded for correct answers
// The points awarded for ommitted answers (note that this may be negative)
// The points deducted for incorrect answers (hint: this value has to be subtracted)
// Note: The input will always be valid (an array and three numbers)

// #1:

// [0, 0, 0, 0, 2, 1, 0], 2, 0, 1  -->  9

// 5 correct answers: 5*2 = 10
// 1 omitted answer: 1*0 = 0
// 1 wrong answer: 1*1 = 1
// which is: 10 + 0 - 1 = 9

function scoreTest(str, right, omit, wrong){
  var correct=0, omitted=0, incorrect=0;
  for (var i = 0; i<str.length; i++){
    if      (str[i]==0) { correct+=1; }
    else if (str[i]==1) { omitted+=1; }
    else                { incorrect+=1; }
  }
  return (correct*right + omitted*omit - incorrect*wrong);
}

console.log(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1))
// 9
console.log(scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2))
// 3