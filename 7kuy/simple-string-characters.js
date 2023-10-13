// In this Kata, you will be given 

  // a "string" and your task will be 
// to return a list of ints 

	// detailing the count of 
// uppercase letters, 
// lowercase, 
// numbers,
// special characters


function solve(str) {
	let upper = 0
  let lower = 0
  let numb = 0
  let spec = 0
  
  for(let i = 0; i < str.length; i++) {
  	
  		if (/[A-Z]/.test(str[i])) {   	
    		upper++
    	} else if (/[a-z]/.test(str[i])) {
    		lower++
    	} else if (/[0-9]/.test(str[i])) {
      	console.log(str[i])
    		numb++
    	} else {
      	spec++
      }
  		
	}
  return [upper, lower, numb, spec]
}

console.log(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"))
// [7,13,4,10] 34 
console.log(solve("*'&ABCDabcde12345"))
// [4,5,5,3]
console.log(solve(""))
//[0,0,0,0]
console.log(solve("aAbBcC"))
// [3,3,0,0]
console.log(solve("Codewars@codewars123.com"))
// [1,18,3,2]
console.log(solve("bgA5<1d-tOwUZTS8yQ"))
// [7,6,3,2]
console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"))
// [9,9,6,9]
console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"))
// [15,8,6,9]
console.log(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"))
// [10,7,3,6]
