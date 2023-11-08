// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

// n check for if it's a number or a another datas type
// operator check if the calculus is possible 

// if the result is something that is not a number return 'unknow value'

function calculator(n1, n2, operator) {
	if(isNaN(n1) || isNaN(n2)) {
  	return 'unknown value'
  } else {
   	if(operator === "+") {
    	return n1 + n2
    } else if(operator === '-') {
    	return n1 - n2
    } else if(operator === '*') {
    	return n1 * n2
    } else if(operator === '/') {
    	return n1 / n2
    } else {
    	return 'unknown value'
    }
  }
}

console.log(calculator(1,2,"+"))
//=> result will be 3
console.log(calculator(1,2,"&"))
//=> result will be "unknown value"
console.log(calculator(1,"k","*"))
//=> result will be "unknown value"