// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

	sudokuSolver(board);

	function isValid(board, row, col, k) {
		for (let i = 0; i < 9; i++) {
			const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
			const n = 3 * Math.floor(col / 3) + i % 3;
			if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
				return false;
			}
		}
		return true;
	}


	function sudokuSolver(data) {
		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				if (data[i][j] == '-') {
					for (let k = 1; k <= 9; k++) {
						if (isValid(data, i, j, k)) {
							data[i][j] = '${k}';
							if (sudokuSolver(data)) {
								return true;
							} else {
								data[i][j] = '-';
							}
						}
					}
					return false;
				}
			}
		}
		return true;
	}
	return board;
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


module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}