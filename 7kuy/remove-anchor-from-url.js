// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Solution 1
function removeUrlAnchor(url){
 return url.replaceAll('#', ' ').split(' ').splice(0,1).join()
}

// Solution 2
function removeUrlAnchor(url){
  return url.split('#')[0]
}

console.log(removeUrlAnchor("www.codewars.com#about"))
// "www.codewars.com"
console.log(removeUrlAnchor("www.codewars.com?page=1"))
// "www.codewars.com?page=1"