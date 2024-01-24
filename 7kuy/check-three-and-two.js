//  Given an array with exactly 5 strings "a", "b" or "c", check if the array contains three and two of the same values.

const checkThreeAndTwo = array => {
  const obj = {}
  array.forEach(e => obj[e] ? obj[e]++ : obj[e] = 1)
  let values = Object.values(obj)
  return values.includes(2) && values.includes(3)
}


console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]))
// true  
// 3x "a" and 2x "b"
console.log(checkThreeAndTwo(["a", "b", "c", "b", "c"]))
// false 
// 1x "a", 2x "b" and 2x "c"
console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"]))
// false 
// 5x "a"