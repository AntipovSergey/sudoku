const bigSquares = getBigSquares(sudoku);
// { sq0: [], sq1: [], ...}

const boardGuesses = {

};

const fillIteration = sudoku => {
	for (let row = 0; row < sudoku.length; row += 3) {
		for (let col = 0; col < sudoku[row].length; col += 3) {
			if(sudoku[row][col]) {
				continue;
			} else if (!sudoku[row][col]) {
				const exceptions = new Set;
				a = getexceptionsFromRow(sudoku, row); // Set
				b = getexceptionsFromCol() // Set
				sq = getSquare(sudoku[row][col])
				c = getexceptionsFromSq(sq)	// Set
				exceptions.push(a, b, c);
				if (exceptions.length === 8) {
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


[
	{
		init: true,
		value: 1,
		row: 1,
		col: 3,
		sq: 2
	},
	{
		init: false,
		value: 0,
		guesses: [1, 3, 4, 5],
		row: 4,
		col: 3,
		sq: 4
	}
]
