// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
	return s.split(' ').map(element => element.length).sort((a,b)=> a-b)[0]
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
// 3
console.log(findShort("turns out random test cases are easier than writing out basic ones"))
// 3
console.log(findShort("Let's travel abroad shall we"))
// 2
console.log(findShort("Ripple LiteCoin Classic Ripple Monero 21inc Lisk Factom 21inc DarkCoin ProofOfStake LiteCoin Factom Bitcoin ProofOfWork ProofOfWork Mine 21inc ProofOfStake"))
// 4