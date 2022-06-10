const chooseSudoku = require('./giveMeBoard.js')
const validate = require('./validator.js')

function prettyBoard(arr) {
	return arr.map((el) => el.join(' ')).join('\n');
}

function runSudoku() {
	const matrix = chooseSudoku(process.argv[2]);

	while (matrix.forEach((el) => el.find((elem) => elem === '-'))) {
		for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; j < matrix.length; j++) {
				const point = [i, j];
				if (matrix[i][j] == '-') {
					let num = validate(matrix, point);

					if (num) {
						matrix[i][j] = num;
					} else {
						continue;
					}
				} else {
					continue;
				}
			}
		}
	}

	return prettyBoard(matrix);
}

runSudoku();