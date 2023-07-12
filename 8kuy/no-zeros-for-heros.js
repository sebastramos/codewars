// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

function noBoringZeros(n) {
  return n % 10 || n === 0 ? n : noBoringZeros(n / 10);
}

console.log(noBoringZeros(1450))
// 145
console.log(noBoringZeros(960000))
// 96
console.log(noBoringZeros(1050))
// 105
console.log(noBoringZeros(-1050))
//-105
// Zero alone is fine, don't worry about it.
// Poor guy anyway