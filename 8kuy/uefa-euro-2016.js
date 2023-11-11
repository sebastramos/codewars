// Finish the uefaEuro2016() function so it return string just like in the examples below:

// Solution 1
function uefaEuro2016(arr1,arr2) {

	function matchResult() {
  	if(arr2[0] === arr2[1]) {
    	return 'teams played draw.'
    } else if(arr2[0] > arr2[1]) {
    	return `${arr1[0]} won!`
    } else {
    	return `${arr1[1]} won!`
    }
  }
  
	return `At match ${arr1[0]} - ${arr1[1]}, ${matchResult()}`
}

// Solution 2
function uefaEuro2016(teams, scores) {
    const [team1, team2] = teams
    const [score1, score2] = scores
    const winner = score1 > score2 ? team1 : team2

    return score1 === score2
        ? `At match ${team1} - ${team2}, teams played draw.`
        : `At match ${team1} - ${team2}, ${winner} won!`
}

console.log(uefaEuro2016(['Germany', 'Ukraine'],[2, 0]))
// "At match Germany - Ukraine, Germany won!"
console.log(uefaEuro2016(['Belgium', 'Italy'],[0, 2]))
// "At match Belgium - Italy, Italy won!"
console.log(uefaEuro2016(['Portugal', 'Iceland'],[1, 1]))
// "At match Portugal - Iceland, teams played draw."