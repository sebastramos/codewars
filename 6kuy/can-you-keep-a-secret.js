// There's no such thing as private properties on a coffeescript object! 
// But, maybe there are?

// Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

// getSecret() which returns the secret
// setSecret() which sets the secret


// Solution 1
function createSecretHolder(secret) {
	return {
  	getSecret: function() {
    	return secret
    },
    setSecret: function(s) {
    	secret = s
    }
  }
}

// Solution 2
class object {
	constructor(secret) {
  	this.secret = secret
  }
  getSecret() {
  	return this.secret
  }
  setSecret(value) {
  	this.secret = value
  }
}

function createSecretHolder(secret) {
	let num = new object(secret)
  return num
}

let obj = createSecretHolder(5)
console.log(obj.getSecret())
// # returns 5
obj.setSecret(2)
console.log(obj.getSecret())
// # returns 2