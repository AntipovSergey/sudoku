const {
	sudokuToArray,
	sudokuToString,
	sudokuToMap,
	getSquare,
	getexceptionsFromRow,
	getexceptionsFromCol,
	getExceptionsFromSquare,
	getAllExceptions,
	getGuesses
} = require('./helpers');

const checkGuess = () => {

};

const solve = (sudoku) => {
	const sudokuDB = sudokuToMap(sudokuToArray(sudoku));

	for (let i = 0; i < sudokuDB.length; i++) {
		const cell = sudokuDB[i];

		if (cell.value) { // Если значение клетки не 0 - идем на следующую итерацию
			continue;
		}

		const exceptions = getAllExceptions(i, sudokuDB);
		cell.guesses = getGuesses(cell, exceptions);
	}
};

module.exports = { solve };
