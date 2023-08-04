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
function prettyBoard(board) {
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
}

console.log(fillSudoku(sudokuArr));
// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
  fillSudoku,
};
