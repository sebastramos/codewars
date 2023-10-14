// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

function reverse(arr) {
  let cont = []
    for(let i = arr.length -1; i >= 0; i--) {
      cont.push(arr[i])
    }
    return cont
  }
  
  console.log(reverse([1,2,3]))
  // [3,2,1]
  console.log(reverse([1,null,14,"two"]))
  // ["two",14,null,1]
  
  