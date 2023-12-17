// Create an any function that accepts an array and a function, and returns true if function returns true for any item in the array.
// If the array is empty, the function should return false.

function any(arr, fun){
    return arr.some(e => fun(e))
}

console.log(any([1,2,3,4], function(v,i){return v>3}))
// true
console.log(any([1,2,3,4], function(v,i){return v>4}))
// false