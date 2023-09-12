// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Solution 1
function switcheroo(x) {
	let change = []
	
	for(let i = 0; i < x.length; i++) {
  	if (x[i] === "a") {
    	change.push('b')
    } else if (x[i] === 'b') {
    	change.push('a')
    } else {
    	change.push(x[i])
    }  	
  }
  return change.join('')
}


// Solution 2
function switcheroo(x){
  return x.split('').map(e =>{
    if (el =='b')return 'a';
    if (el == 'a') return 'b';
    if(el =='c') return 'c'
  }).join('');
}


console.log(switcheroo('acb'))
// 'bca'
console.log(switcheroo('aabacbaa'))
// 'bbabcabb'
