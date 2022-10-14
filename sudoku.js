// Подключаю Fs и настраиваю его (Игорь)
const createBoardSudoku = (number = 0) => {
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
  return sudokuBoardNumberOne;
};

console.table(createBoardSudoku(0)); // от 0 до 13
// Функция прохода горизонталь и вертикаль (Саша)
const checkerRowColumn = (arr) => {


  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if(arr[i].includes('3')) {}
      const ultraSecretNum = Math.ceil(Math.random() * 9).toString();

      if (arr[i][j] === '-') {
        arr[i][j] = ultraSecretNum;
      } else {
        checkerRowColumn(arr);
      }
    }
  }
  return arr;
};
console.table(checkerRowColumn(createBoardSudoku()));

// Функция прохода коробки 3х3
const checkerBox = () => {

};

// Функция, которая проверяет можно ли точно подставить числа

const currentNums = () => {

};

module.exports = {
};
