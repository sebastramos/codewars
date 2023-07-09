// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
// Your function receives one side of the DNA; you need to return the other complementary side.
// DNA strand is never empty or there is no DNA at all.


// Solution 1
function DNAStrand(dna){
	let finalDNA = ''
 	for(let i = 0; i < dna.length; i++) {
  	if(dna[i] === 'A') {
    	finalDNA += 'T'
    } else if(dna[i] === 'T') {
    	finalDNA += 'A'
    } else if(dna[i] === 'C') {
    	finalDNA += 'G'
    } else {
    	finalDNA += 'C'
    }
  }
  return finalDNA
}


console.log(DNAStrand("ATTGC"))
// "TAACG"
console.log(DNAStrand("GTAT"))
// "CATA"