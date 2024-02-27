// Make your strings more nerdy: 
// Replace all 
// 'a'/'A' with 4, 
// 'e'/'E' with 3
// 'l' with 1 e.g. 

// "Fundamentals" --> "Fund4m3nt41s"

// Solution 1
function nerdify(txt) {
	txt = txt.split('')
  
  return txt.map(function(e) {
  	if(e === 'a' || e === 'A') {
    	return '4'
    } else if(e === 'e' || e === 'E') {
    	return '3'
    } else if(e === 'l') {
    	return '1'
    } else {
    	return e
    }
  }).join('')
}

// Solution 2
function nerdify(txt){
  return txt.replaceAll('a','4')
  					.replaceAll('A','4')
            .replaceAll('e','3')
            .replaceAll('E','3')
            .replaceAll('l','1')
}

console.log(nerdify("Fund4m3nt41s"))
// "Fund4m3nt41s"
console.log(nerdify("Seven"))
// "S3v3n"
console.log(nerdify("Los Angeles"))
// "Los 4ng313s"
console.log(nerdify("Seoijselawuue"))
// "S3oijs314wuu3"