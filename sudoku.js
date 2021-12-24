// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
	const matrixSudoku = transformStrSud(boardString)
	for (let row = 0; row < matrixSudoku.length; row++) {
		const curRow = matrixSudoku[row] //?
		for (let col = 0; col < curRow.length; col++) {
			if(matrixSudoku[row][col] === '-') {
				const allowedValue = getAllowedValue(row,col,matrixSudoku)
				console.log(allowedValue)
			}
		}
	}
	return matrixSudoku
}

function getAllowedValue(row,col,arr){
	const vertical = getVerticalLine(col,arr) //?
	const horizontal = arr[row].map(Number).filter(item => item === item)
	const square = getCurrentSquare(row,col,arr)
	const result = [...vertical,...horizontal,...square]
	console.log(square)
	return new Set(result)
}

function getVerticalLine(col,arr){
	return arr.map((item) => +item[col]).filter(item => item === item)
}
function getHorizontalLine(row,col,arr){

}
function getCurrentSquare(row,col,arr) {
	const result = []
	const horIndexSquare = Math.floor(col/3) * 3
	const vertIndexSquare = Math.floor(row/3) * 3
	console.log(horIndexSquare)
	for (let row = vertIndexSquare; row < vertIndexSquare + 3; row++) {
		for (let col = horIndexSquare; col < horIndexSquare  + 3; col++) {
			if(arr[row][col] !== '-') {
				result.push(+arr[row][col]) //?
			}
		}
	}

	return result
}

function transformStrSud(str) {
	return str.split('').reduce((acc,cur,i) => {
		const index = Math.floor(i/9)
		acc[index] = acc[index] ? [...acc[index],cur] : [cur]
		return acc
	},[])
}
// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}