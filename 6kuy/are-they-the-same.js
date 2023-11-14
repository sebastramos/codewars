// Given two arrays a and b write a function comp(a, b) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears).
// "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.


//a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// true 
// b 121 is the square of 11,
// 14641 is the square of 121,
// 20736 the square of 144,
// 361 the square of 19,
// 25921 the square of 161,

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// false
// because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// false 
// because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] or {}
// a or b might be null
// If a or b are null the problem doesn't make sense so return false.

function comp(a1, a2){
  if (a1 === null || a2 === null) return false
  
  for (let num of a2){
    if (a1.indexOf(Math.sqrt(num)) === -1) return false
    else a1.splice(a1.indexOf(Math.sqrt(num)), 1)
  }
  return true;
}


let a = [121, 144, 19, 161, 19, 144, 19, 11]  
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
console.log(comp(a, b))
// true 

a = [2, 2, 3]
b = [4, 9, 9]
console.log(comp(a,b))
// false

a = []  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
console.log(comp(a, b))
// false

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
console.log(comp(a, b))
// true

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
console.log(comp(a, b))
// false

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
console.log(comp(a, b))
// false