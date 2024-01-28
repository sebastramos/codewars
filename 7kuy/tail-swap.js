// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

function tailSwap(arr) {
	let frstString = arr.map(e => e.split(':')[0])
  let scdString = arr.map(e => e.split(':')[1]).reverse()
	return frstString.map((e,i) => e + ':' + scdString[i])
}

console.log(tailSwap(['abc:123', 'cde:456']))
// ['abc:456', 'cde:123']
console.log(tailSwap(['a:12345', '777:xyz']))
// ['a:xyz', '777:12345']