const chooseSudoku = require('./givMeBoard.js')
const validate = require('./validator.js')


function runSudoku() {
	const matrix = chooseSudoku(process.argv[2]);

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

	if (matrix.forEach((el) => el.find((elem) => elem === '-'))) {

	} else {

	}
}
