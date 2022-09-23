const fs = require('fs');

const sudoku = fs.readFileSync('./puzzles.txt', 'utf-8').split('\n');
const rgv = process.argv[2];
//  * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
//  * Возвращает игровое поле после попытки его решить.
//  * Договорись со своей командой, в каком формате возвращать этот результат.
//  */

function solve(boardString) {
  const res = [];
  for (let i = 0; i < boardString.length; i += 9) {
    const elem = [];
    for (let k = i; k < i + 9; k += 1) {
      elem.push(boardString[k]);
    }
    res.push(elem);
  }
  return res;
}
const _board = solve(sudoku[rgv]);

function isValid(board, row, col, k) {
  for (let i = 0; i < 9; i++) {
    const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const n = 3 * Math.floor(col / 3) + i % 3;
    if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
      return false;
    }
  }
  return true;
}

function sodokoSolver(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] == '-') {
        for (let k = 1; k <= 9; k++) {
          if (isValid(data, i, j, k)) {
            data[i][j] = `${k}`;
            if (sodokoSolver(data)) {
              return true;
            }
            data[i][j] = '-';
          }
        }
        return false;
      }
    }
  }
  return true;
}
// sodokoSolver(_board);
// console.table(_board);
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved([rgv]) {
  if (rgv >= 15) {
    return console.log('Ошибка, введи число от 0 по 14');
  }
  solve(sudoku[rgv]);
  sodokoSolver(_board);
  prettyBoard(_board);
  console.table(prettyBoard(solve(sudoku[rgv])));
  console.log('\n');
  // console.table(_board);
  // console.log(true);
}
isSolved([rgv]);

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */

function prettyBoard(board) {
  const fin = [];
  for (let i = 0; i < board.length; i += 1) {
    fin.push(board[i].join(' '));
  }
  return fin.join('\n');
}
console.log(prettyBoard(_board));

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
