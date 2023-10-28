// Write a function

// vowel2index(str)
// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.

// Your function should be case insensitive to the vowels.

function vowel2index(str) {
	return str.split('').map((el, index) => {
  	if(el.toLowerCase() === 'a' ||
    	 el.toLowerCase() === 'e' ||
       el.toLowerCase() === 'i' ||
       el.toLowerCase() === 'o' ||
       el.toLowerCase() === 'u') {
    	return index+1
    } else {
    	return el
    }
  }).join('')
}

console.log(vowel2index('this is my string'))
// 'th3s 6s my str15ng'
console.log(vowel2index('Codewars is the best site in the world'))
// 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
console.log(vowel2index('Tomorrow is going to be raining'))
// 'T2m4rr7w 10s g1415ng t20 b23 r2627n29ng'
console.log(vowel2index(''))
// ''