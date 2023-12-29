// Help Suzuki rake his garden!

// The monastery has a magnificent Zen garden made of white gravel and rocks and it is raked diligently everyday by the monks.
// Suzuki having a keen eye is always on the lookout for anything creeping into the garden that must be removed during the daily raking such as insects or moss.

// You will be given a string representing the garden such as:

// Rake out any items that are not a rock or gravel and replace them with gravel such that:

// garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'
// garden = 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'

function rakeGarden(garden) {
	garden = garden.split(' ')
	let cleanGarden = ''
	for(let i = 0; i < garden.length; i++) {
  	if(garden[i] === 'rock' || garden[i] === 'gravel') {
    	cleanGarden += garden[i] + ' '
    } else {
    	cleanGarden += 'gravel '
    }
  }
  return cleanGarden.trim()
}

let garden1 = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'

console.log(rakeGarden(garden1))
// 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'

let garden2 = 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel'

console.log(rakeGarden(garden2))
// 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel rock gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel rock gravel gravel' 
