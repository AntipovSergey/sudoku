const fs = require('fs')
const data = fs.readFileSync('./sudoku-puzzles.txt',
	'utf-8')
console.log('получаем всё\n', data)

// Получаем доску

function getBoard(data) {
	let sudokuBoard = [];
	for (let i = 0; i < 81; i += 9) {
		sudokuBoard.push(data.slice(i, i + 9).split(''))
	}
	return sudokuBoard
}
// console.log('отрисовываем доску')
// console.table(getBoard(data))

const board = getBoard(data);

// Получаем пустую ячейку

function findEmpty() {
	for (let horizon = 0; horizon < 9; horizon++) {
		for (let vertical = 0; vertical < 9; vertical++) {
			if (board[horizon][vertical] === '-') {
				return [horizon, vertical];
			}
		}
	}
	return 'done'
}
// console.log('получаем пустое значение')
// console.log(findEmpty(board))

let emptyValue = findEmpty(board);

function recurse(board, emptyValue) {

	if (emptyValue === 'done') {
		return board;
	}

	for (let i = 1; i <= 9; i++) {
		if (check(emptyValue, board, i) && checkBox(i, emptyValue, board)) { // Проверяем подобранные циклом числа на возможность проставить горизнталь/вертикаль
			const [h, v] = emptyValue;
			board[h][v] = i;
			if (recurse(board, emptyValue)) {
				return board;
			}
		}
		board[h][v] = '-';
	}
	return false;
}
recurse(board, emptyValue);

function check(emptyValue, board, num) {
	const horizon = emptyValue[0];
	const vertical = emptyValue[1];

	//идем по строке

	const arrVer = [];
	for (let i = 0; i < 9; i++) {
		arrVer.push(board[i][vertical]);
	}

	const arrHor = board[horizon];

	if (!arrVer.includes(num) && !arrHor.includes(num)) {
		return true;
	}
	return false;
}

function checkBox(currentNum, emptyValue, board) {
	const boxRow = Math.floor(emptyValue[0] / 3) * 3;
	const boxCol = Math.floor(emptyValue[1] / 3) * 3;

	for (let i = 1; i < boxRow + 3; i++) {
		for (let j = 1; i < boxCol + 3; j++) {
			if (board[i][j] === currentNum && i !== emptyValue[0] && j !== emptyValue[1]) {
				return false; //!== currentRow && j !== currentCol исключает проверку текущего числа
			}
		}
	}
	return true;
}

