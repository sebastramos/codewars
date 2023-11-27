function dataReverse(data) {
	let bytes = []
	for(let i = 0; i < data.length; i+=8) {
  	bytes.push(...data.slice(i, i+8))
  }
  return bytes.reverse().flat()
}


console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]))