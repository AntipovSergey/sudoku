// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function getUpdateTable(matrixSudoku) {
	for (let row = 0; row < matrixSudoku.length; row += 1) {
		const curRow = matrixSudoku[row];
		for (let col = 0; col < curRow.length; col += 1) {
			const check = checker(row,col,matrixSudoku);
			if(matrixSudoku[row][col] === '-' && check) {
				matrixSudoku[row][col] = check;
			}

		}
	}

	if(!isSolved(matrixSudoku)) getUpdateTable(matrixSudoku)
	return matrixSudoku
}
function solve(boardString) {
	const matrixSudoku = transformStrSud(boardString)
	console.log(matrixSudoku)
	return getUpdateTable(matrixSudoku)
}

function getAllowedValue(row,col,arr){
	const allValue = [1,2,3,4,5,6,7,8,9]

	const vertical = getVerticalLine(col,arr)
	const horizontal = arr[row].map(Number).filter(item => item === item)
	const square = getCurrentSquare(row,col,arr)

	const allUseValue = [...vertical,...horizontal,...square]
	const uniqueUseValue = [...new Set(allUseValue)]

	const allowValue = allValue.filter(item => !uniqueUseValue.includes(item))

	return allowValue
}

function checker(row,col,arr) {
	const allowValue = getAllowedValue(row,col,arr)
	return allowValue.length === 1 ? allowValue[0] : null
}

function getVerticalLine(col,arr){
	return arr.map((item) => +item[col]).filter(item => item === item)
}

function getCurrentSquare(row,col,arr) {
	const result = []
	const horIndexSquare = Math.floor(col/3) * 3
	const vertIndexSquare = Math.floor(row/3) * 3
	for (let row = vertIndexSquare; row < vertIndexSquare + 3; row++) {
		for (let col = horIndexSquare; col < horIndexSquare  + 3; col++) {
			if(arr[row][col] !== '-') {
				result.push(+arr[row][col])
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
	return board.flat().indexOf('-') < 0
}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
	const solvedPuzzle = board.flat()
	return solvedPuzzle.reduce((acc,cur,i)=> {
		if(i % 9 === 0)  {
			acc += "\n"+`${cur} `
			return acc
		}
		acc += ` ${cur} `
		return acc
	},'')
}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}