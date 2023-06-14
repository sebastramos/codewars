// Your task is to make two functions ( max and min, or maximum and minimum, etc., 
// depending on the language ) that receive a list of integers as input, 
// and return the largest and lowest number in that list, respectively.

var min = function(list){
  return Math.min.apply(null,list);
}

var max = function(list){
  return Math.max.apply(null,list);
}


console.log(min([4,6,2,1,9,63,-134,566]))
// min = -134
console.log(max([4,6,2,1,9,63,-134,566]))
// max = 566,