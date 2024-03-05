// Your job is to group the words in anagrams.

// What is an anagram ?
// star and tsar are anagram of each other because you can rearrange the letters for star to obtain tsar.

// Example
// A typical test could be :

// input
// ["tsar", "rat", "tar", "star", "tars", "cheese"]

// output
// [  ["tsar", "star", "tars"], ["rat", "tar"], ["cheese"] ]
// Hvae unf !

// I'd advise you to find an efficient way for grouping the words in anagrams otherwise you'll probably won't pass the heavy superhero test cases

function groupAnagrams(words) {
  const anagrams = {}
	for(let word of words){
		let sortedWord = word.split('').sort().join('')
		if(sortedWord in anagrams){
			anagrams[sortedWord].push(word)
		}else{
			anagrams[sortedWord] = [word]
		}
	}
	return Object.values(anagrams)
}

console.log(groupAnagrams(["rat", "tar", "star"]))
// [["rat", "tar"], ["star"]]