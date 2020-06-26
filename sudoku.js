// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

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

// Функция которая проверяет валидность предикта
let isValid = (puzzle, prediction, position) => {


	// проверка строки
	let rowValidator = (puzzle,prediction, position) => {
		let checkingArr = puzzle[position[0]];
		for (let i = 0; i < checkingArr; i++) {
			if (checkingArr[i] === prediction) return false;
		}
		return true;
	}
	// проверка столбца
	let columnValidator = (puzzle, prediction, position) => {
		for (let i = 0; i < puzzle.length; i++) {
			if (puzzle[i][position[1]] === prediction) return false;
		}
		return true;
	}

	let validateBox = (puzzle, prediction, position) => {
		let row = puzzle[position[0]];
		let col = puzzle[position[0]][position[1]];
		row = Math.floor(row / 3) * 3;
		col = Math.floor(col / 3) * 3;
		let isFound = false;
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (puzzle[row + i][col + j] === prediction) isFound = false;
			}
		}
		return isFound;
	}

	if (rowValidator(puzzle, prediction, position)
		&& columnValidator(puzzle, prediction, position)
		&& validateBox(puzzle, prediction, position)) {
		return true;
	}
	return false;
}
