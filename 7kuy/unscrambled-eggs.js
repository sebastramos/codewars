// Unscramble the eggs.

// The string given to your function has had an "egg" inserted directly after each consonant. 
// You need to return the string before it became eggcoded.

function unscrambleEggs(str) {
	return str.split('egg').join('')
}

console.log(unscrambleEggs("Beggegeggineggneggeregg"))
// "Beginner"
//             "B---eg---in---n---er---"
