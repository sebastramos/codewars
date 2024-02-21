// There were and still are many problem in CW about palindrome numbers and palindrome strings.
// We suposse that you know which kind of numbers they are.
// If not, you may search about them using your favourite search engine.

// In this kata you will be given a positive integer, val and you have to create the function nextPal that will output the smallest palindrome number higher than val.

// You will be receiving values higher than 10, all valid.

function nextPal(val) {
		val++
    for (let i = val; ; i++) {
        if (String(i) === String(i).split("").reverse().join("")) {
          return i
        }
    }
}

console.log(nextPal(11))
// 22
console.log(nextPal(188))
// 191
console.log(nextPal(191))
// 202
console.log(nextPal(2541))
// 2552