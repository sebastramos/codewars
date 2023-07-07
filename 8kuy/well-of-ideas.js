// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.
// If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// Solution 1
function well(x){
	let good = 0
  let bad = 0
  
	x.forEach(el => el === 'good' ? good++ : bad++)
  
  if(good > 2) {
  	return 'I smell a series!'
  } else if (good > 0) {
  	return 'Publish!' 
  } else {
    return 'Fail!'	
  }
}

// Solution 2
const well = x => {
  const good_count = x.filter(x => x == 'good').length
  return good_count < 1 ? 'Fail!' : 
         good_count < 3 ? 'Publish!' : 'I smell a series!'
}

console.log(well(['bad', 'bad', 'bad']))
// Fail! 
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))
// Publish!
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))
// I smell a series!
