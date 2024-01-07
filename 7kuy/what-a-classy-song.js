// Your job is to create a class called Song.

// A new Song will take two parameters, title and artist.

// You will also have to create an instance method named howMany() (or how_many()).

// The method takes an array of people who have listened to the song that day.
// The output should be how many new listeners the song gained on that day out of all listeners.
// Names should be treated in a case-insensitive manner, i.e. "John" is the same as "john".

class Song{
    constructor(title, artist){
        this.title = title
        this.artist = artist
        this.listen = []
    }
      
    howMany(arr){
      let count = 0
      for(let i of arr){
        if(!this.listen.includes(i.toLowerCase())){
          this.listen.push(i.toLowerCase())
          count++
        }
      }
      return count
    }
  }
  
  
  let mountMoose = new Song('Mount Moose', 'The Snazzy Moose')
  
  console.log(mountMoose.title)
  // 'Mount Moose'
  console.log(mountMoose.artist)
  // 'The Snazzy Moose')
  console.log(mountMoose.howMany(['John', 'Fred', 'Bob', 'Carl', 'RyAn']))
  // 5
  console.log(mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']))
  // 2
  console.log(mountMoose.howMany(['Amanda', 'CalEb', 'CarL', 'Furgus']))
  // 2
  console.log(mountMoose.howMany(['JOHN', 'FRED', 'BOB', 'CARL', 'RYAN', 'KATE']))
  // 1
  console.log(mountMoose.howMany(['Jack', 'jacK']))
  // 1
  