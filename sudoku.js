const fs = require('fs');
/* eslint-disable no-unreachable-loop */
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку. (чтение текстого файла, fs)
 */
function prettyBoard() {
  document.write(`${'--'.repeat(15)}<br>`);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 10; k++) {
        for (let l = 0; l < 3; l++) {
          document.write(' ');
        }
        document.write(' | ');
      }
      document.write('<br>');
    }
    document.write(`${'--'.repeat(15)}<br>`);
  }
}
prettyBoard();

visualizeTable();
const sudoku1 = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];
}

const sudokuArr = [
  ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
  ['-', '9', '-', '-', '7', '6', '4', '-', '5'],
  ['2', '-', '-', '4', '-', '-', '8', '1', '9'],
  ['-', '1', '9', '-', '-', '7', '3', '-', '-'],
  ['6', '7', '6', '2', '-', '8', '3', '-', '9'],
  ['-', '-', '-', '-', '-', '-', '-', '6', '1'],
  ['-', '5', '-', '-', '-', '7', '6', '-', '-'],
  ['-', '-', '3', '-', '4', '3', '-', '2', '-'],
  ['5', '-', '1', '6', '-', '-', '3', '-', '8'],
];

function fillSudoku(sudokuArr) {
  const repeatNum = new Set(sudokuArr);
  return sudokuArr.length !== repeatNum.size;
  // for (let i = 0; i < 9; i++) {
  //   for (let j = 0; j < 9; j++) {
  //     if (sudokuArr[i][j] !== sudokuArr[i][j + 1]) {
  //       // board = takeSudoku(), задать переменную и заменить на нее
  //       console.log(sudokuArr[i][j]);
  //       return true;
  //     }
  //   }
  //   return false;
  // }
  // if (sudokuArr[i][j] === '-') {
  //   const emptyCell =
  // }
  // for (let b = 0; b < sudokuArr.length; b++) {
  //   for (let b1 = 0; b1 < sudokuArr.length; b1++) {
  //     if (sudokuArr[b][b1] !== sudokuArr[b1][b]) {
  //       // board = takeSudoku(), задать переменную и заменить на нее
  //       console.log(sudokuArr[b][b1]);
  //       return true;
  //     }
  //   }
  //   return false;
function getSuggestedNumbers(sudoku, row, col) {
  if (sudoku[row][col] !== 0) {
    return [];
  }
  const suggestedNumbers = new Set();
  const size = sudoku.length;
  for (let i = 0; i < size; i++) {
    suggestedNumbers.add(sudoku[row][i]);
  }
  for (let i = 0; i < size; i++) {
    suggestedNumbers.add(sudoku[i][col]);
  }
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      suggestedNumbers.add(sudoku[startRow + i][startCol + j]);
    }
  }
  suggestedNumbers.delete(0);
  const result = Array.from(suggestedNumbers);
  return result.map((el) => el.toString());
}

console.log(fillSudoku(sudokuArr));
console.log(getSuggestedNumbers(sudoku1, 0, 2));
// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  // prettyBoard,
  fillSudoku,
  getSuggestedNumbers,
};

// function takeSudoku(index) {
//   const filePath = './puzzles.txt';
//   const arr = data.split('');
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++);

// }
// takeSudoku();

function takeSudoku(index) {
  const filePath = './puzzles.txt';
  const data = fs.readFileSync(filePath, 'utf8').split('\n');
  // const arr = data.trim().split('\n');
  // console.log(arr);

  const arr = data[index];
  const newArr = Array.from(arr);
  const newArr2 = [];

  // for (let i = 0; i < arr.length; i++) {

  for (let i = 0; i <= 8; i++) {
    newArr2.push(newArr.slice(i, i + 9));
  }
  return newArr2;
}
console.log(takeSudoku(6));
