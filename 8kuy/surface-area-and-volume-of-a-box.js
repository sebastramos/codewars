// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
	let area = 2 * (height * width) + 2 * (width * depth) + 2 * (depth * height)
	let volume = width * height * depth
	return [area, volume]
}

console.log(getSize(4, 2, 6))
// [88, 48])
console.log(getSize(10, 10, 10))
// [600, 1000])
