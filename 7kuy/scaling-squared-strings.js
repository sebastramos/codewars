// You are given a string of n lines, each substring being n characters long.

// s = "abcd\nefgh\nijkl\nmnop"

// We will study the "horizontal" and the "vertical" scaling of this square of strings.

// A k-horizontal scaling of a string consists of replicating k times each character of the string (except '\n').

// Example: 2-horizontal scaling of s: => "aabbccdd\neeffgghh\niijjkkll\nmmnnoopp"
// A v-vertical scaling of a string consists of replicating v times each part of the squared string.

// Example: 2-vertical scaling of s: => "abcd\nabcd\nefgh\nefgh\nijkl\nijkl\nmnop\nmnop"
// Function scale(strng, k, v) will perform a k-horizontal scaling and a v-vertical scaling.

// Example: a = "abcd\nefgh\nijkl\nmnop"
// scale(a, 2, 3) --> "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"

/* 
abcd   ----->   aabbccdd
efgh            aabbccdd
ijkl            aabbccdd
mnop            eeffgghh
                eeffgghh
                eeffgghh
                iijjkkll
                iijjkkll
                iijjkkll
                mmnnoopp
                mmnnoopp
                mmnnoopp
*/

// Task:
// Write function scale(strng, k, v) k and v will be positive integers. 
// If strng == "" return "".

function scale(s, k, v) { 
	return s === '' ? '' : s.split("\n")
  					 						 .map(e => e.split("")
                         .map(c => c.repeat(k))
                         .join(""))
                         		.map(el => (el + "\n")
                         		.repeat(v))
                         		.join("")
                         		.slice(0, -1)
}


console.log(scale("abcd\nefgh\nijkl\nmnop", 2, 3))
// "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"
console.log(scale("", 5, 5))
// ""
console.log(scale("Kj\nSH", 1, 2))
// "Kj\nKj\nSH\nSH" 