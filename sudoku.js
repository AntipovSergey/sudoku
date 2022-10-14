// Подключаю Fs и настраиваю его (Игорь)
const fs = require('fs');

const boardSudokuRead = fs.readFileSync('puzzles.txt', 'utf-8');
const boardSudoku = boardSudokuRead.split('\n');
const sudokuBoardNumberOne = new Array(9).fill(1).map((_) => new Array(9).fill('.'));
const sudokuBoardNumberOneValue = boardSudoku[0].split('');

for (let i = 0; i < 9; i += 1) {
  for (let j = 0; j < 9; j += 1) {
    sudokuBoardNumberOne[i][j] = sudokuBoardNumberOneValue[9 * i + j];
  }
}
console.table(sudokuBoardNumberOne);

// Функция прохода горизонталь и вертикаль (Саша)
const checkerRowColumn = () => {

};

// Функция прохода коробки 3х3

const checkerBox = () => {

};

// Функция, которая проверяет можно ли точно подставить числа

const currentNums = () => {

};

module.exports = {
};
