const fs = require("fs");
function read(n) {
  const sudokuMass = []
  n = process.argv[2]-1
  let size =9
  const readText = fs.readFileSync("./puzzles.txt","utf-8").split('\n')
  for (let i = 0; i <readText[n].length/size; i++){
    sudokuMass[i] = readText[n].slice((i*size), (i*size) + size);
    return sudokuMass
  }}


function solve() {
	/**
	 * Принимает игровое поле в том формате, в котором его вернули из функции read.
	 * Возвращает игровое поле после попытки его решить.
	 */
}

function isSolved() {
	/**
	 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
	 * Возвращает булевое значение — решено это игровое поле или нет.
	 */
}

function prettyBoard() {
	/**
	 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
	 * Выводит в консоль/терминал судоку.
	 * Подумай, как симпатичнее его вывести.
	 */
}
module.exports = read;

function isVertical(sudoku, columnIndex) {
	const row = []
	for (let i = 0; i < 9; i++) {
		const value = sudoku[i][columnIndex]

		if (row.includes(value)) {
			return false
		}
		if (value !== '-') {
			row.push(value)
		}
	}
	return true
}


function isHorizontal(sudoku, columnIndex) {
	const row = []
	for (let i = 0; i < 9; i++) {
		const value = sudoku[columnIndex][i]
		if (row.includes(value)) {
			return false
		}
		if (value !== '-') {
			row.push(value)
		}
	}
	return true
}

console.log(isHorizontal(sudoku, 8))

function allValues(board) {
	const arr = []
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] === '-') {
				return false
			}
		}
	}
	return true
}
