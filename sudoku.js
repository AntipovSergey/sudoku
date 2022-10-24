// Подключаю Fs и настраиваю его (Игорь)
let puzzleNumber = Number(process.argv[2])
const createBoardSudoku = (number) => {
  const fs = require('fs');

  const boardSudokuRead = fs.readFileSync('puzzles.txt', 'utf-8');
  const boardSudoku = boardSudokuRead.split('\n').slice(0, -2);
  const sudokuBoardNumberOne = new Array(9).fill(1).map((_) => new Array(9).fill('.'));
  const sudokuBoardNumberOneValue = boardSudoku[number].split('');

  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      sudokuBoardNumberOne[i][j] = sudokuBoardNumberOneValue[9 * i + j];
    }
  }
  console.table(sudokuBoardNumberOne);
  return sudokuBoardNumberOne;
};

const chekRow = (arr) => {
  num = Math.ceil(Math.random() * 9).toString();
  return arr.join('').includes(num) ? chekRow(arr, num) : num;
};

createBoardSudoku(puzzleNumber); // от 0 до 13
// Функция прохода горизонталь и вертикаль (Саша)'
const checkerRowColumn = (arr) => {
  let num;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === '-') arr[i][j] = chekRow(arr[i]);
    }
  }
  return arr;
};
console.table(checkerRowColumn(createBoardSudoku(puzzleNumber)));

// Функция создания объекта по ключам

// Функция, которая проверяет можно ли точно подставить числа

const currentNums = () => {

};

module.exports = {
};