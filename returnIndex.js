function returnIndex(arr) {
	const newArr = []
	for (let row = 0; row < arr.length; row++) {
		for (let column = 0; column < arr[row].length; column++) {
			if (arr[row][column] == '-') {
				newArr.push(row, column)
			}
		}
	}
	return newArr
}
