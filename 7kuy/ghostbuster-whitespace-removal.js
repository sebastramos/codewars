// Oh no! Ghosts have reportedly swarmed the city.
// It's your job to get rid of them and save the day!

// In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

// So what are you waiting for?
// Return the building(string) without any ghosts(whitespaces)!

// If the building contains no ghosts, return the string:
// "You just wanted my autograph didn't you?"

function ghostBusters(str) {
  str = str.split('')
  
  if(str.includes(' ')) {
  	return str.filter(e => e !== ' ').join('')
  } else {
  	return "You just wanted my autograph didn't you?"
  }
}

console.log(ghostBusters("Sky scra per"))
// "Skyscraper"
console.log(ghostBusters("Factor y"))
// "Factory"
console.log(ghostBusters("O  f fi ce"))
// "Office"
console.log(ghostBusters("BusStation"))
// "You just wanted my autograph didn't you?"

