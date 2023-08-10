// You get any card as an argument.
// Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

function defineSuit(card) {
 if (card[card.length -1] === '♣') {
 		return 'clubs'
 } else if (card[card.length -1] === '♦') {
 		return 'diamonds'
 } else if (card[card.length -1] === '♥') {
 		return 'hearts'
  } else if (card[card.length -1] === '♠') {
 		return 'spades'
  }
}

console.log(defineSuit('3♣'))
//  'clubs'
console.log(defineSuit('3♦'))
// 'diamonds'
console.log(defineSuit('3♥'))
// 'hearts'
console.log(defineSuit('3♠'))
// 'spades'