const {
	isPossible
} = require('./helpers');

const boardSolve = (board) => {
	for (let r = 0; r < board.length; r++) {			// row
		for (let c = 0; c < board.length; c++) {		// column
			if (board[r][c] !== 0) {
				for (let g = 1; g < 10; g++) {
					if(isPossible(g, r, c, board)) {
						let newBoard = JSON.parse(JSON.stringify(board));
						newBoard[r][c] = guess;
						if (boardSolve(newBoard)) {
							return newBoard;
						}
					}
				}
				return false;
			}
		}
	}
	return board;
};

module.exports = { boardSolve };
