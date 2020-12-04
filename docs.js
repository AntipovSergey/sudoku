const bigSquares = getBigSquares(sudoku);
// { sq0: [], sq1: [], ...}

const fillIteration = sudoku => {
	for (let row = 0; row < sudoku.length; row++) {
		for (let col = 0; col < sudoku[row].length; col++) {
			if(sudoku[row][col]) {
				continue;
			} else if (!sudoku[row][col]) {
				const exceptions = new Set;
				a = getexceptionsFromRow(sudoku, row); // Set
				b = getexceptionsFromCol() // Set
				sq = getSquare(sudoku[row][col])
				c = getexceptionsFromSq(sq)	// Set
				exceptions.push(a, b, c);
				if (exceptions contain 8 digits) {
					sudoku[row][col] = getTheOne();
				}
			}
		}
	}
}

const getExceptionsFromRow = (sudoku, row) => {
	const exceptions = new Set;
	for (let i = 0; i < 9; i++) {
		if (sudoku[row][i]) {
			exceptions.push(sudoku[row][i]);
		}
	}
	return exceptions;
}

while (boardIsnotComplete()) {
	fillIteration();
}

const sudokuToArray = () => {}
const sudokuToString = () => {}

sudokuArray = sudokuToArray(string)
