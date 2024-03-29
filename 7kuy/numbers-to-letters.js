// Given an array of numbers (in string format), you must return a string. 
// The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. 
// You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

// Solution 1
function switcher(x){
	let alphabet =[' ','?','!','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',''].reverse()
  
  let string = ''
  for(let i = 0; i < x.length; i++) {
    string += alphabet[x[i]]
  }
  return string
}

// Solution 2
const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
const switcher = x => x.map(item => alpha[item]).join('')

console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']))
// 'codewars'
console.log(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']))
// 'btswmdsbd kkw'
console.log(switcher(['4', '24'])) 
// 'wc'