// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

function initializeNames(name){
	name = name.split(' ')
  
  if(name.length > 2) {
  	let middleName = name.slice(1, name.length -1).map(e => e[0] + '.').join(' ')
  	return `${name[0]} ${middleName} ${name[name.length-1]}`
  } else {
		return name.join(' ')
  }
}

console.log(initializeNames('Jack Ryan'))
// 'Jack Ryan'
console.log(initializeNames('Lois Mary Lane'))
// 'Lois M. Lane'
console.log(initializeNames('Dimitri'))
// 'Dimitri'
console.log(initializeNames('Alice Betty Catherine Davis'))
// 'Alice B. C. Davis'