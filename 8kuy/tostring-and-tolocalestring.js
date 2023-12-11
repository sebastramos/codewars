// Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue.
// the value range is 0-255.

// Use toString(16) Convert numbers r g b to hex string form. 
// at last, combine them to a web color code and return it.

// the color code should starting with "#". and then use 2 characters per color.

// That's all of your work. My work is print your color code on your screen.


function colorOf(r,g,b) {
	let hexa = [r,g,b].map(color => color.toString(16))
  
  let rgb = ''
  for(let i = 0; i < hexa.length; i++) {
  	if(hexa[i].length < 2)	{
    	rgb += '0' + hexa[i]
    } else {
    	rgb += hexa[i]
    }
  }
  return '#'+rgb
}

console.log(colorOf(255,0,0))
// "#ff0000"
console.log(colorOf(0,111,0))
// "#006f00"
console.log(colorOf(1, 2 ,3))
// "#010203"