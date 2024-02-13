// In this kata, your job is to create a class Dictionary which you can add words to and their entries.

// >>> let d = new Dictionary();

// >>> d.newEntry("Apple", "A fruit that grows on trees");

// >>> console.log(d.look("Apple"));
// A fruit that grows on trees

// >>> console.log(d.look("Banana"));
// Can't find entry for Banana

class Dictionary {
  constructor() {
    this.entries = {}
  }
  
  newEntry(key, value) {
    this.entries[key] = value
  }
  
  look(key) {
  	return this.entries[key] || `Can't find entry for ${key}`
  }
}

let d = new Dictionary()

// "Testing for key 'Apple', should equal 'A fruit'"
	d.newEntry('Apple', 'A fruit')
  console.log(d.look('Apple'))
  // 'A fruit'


// "Testing for key 'Soccer', should equal 'A sport'"
  d.newEntry('Soccer', 'A sport')
	console.log(d.look('Soccer'))
  // 'A sport'

  
// "Testing for non-existing keys", 
	console.log(d.look('Hi'))
	// 'Can\'t find entry for Hi'
	console.log(d.look('Ball'))
	// 'Can\'t find entry for Ball'


// "Testing that entries are case sensitive"
	console.log(d.look('soccer'))
	// 'Can\'t find entry for soccer'
  d.newEntry('soccer', 'a sport')
	console.log(d.look('soccer'))
	// 'a sport'