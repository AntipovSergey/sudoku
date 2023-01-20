const fs = require('fs');

function solve(boardString) {
  /**
   * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
   * Возвращает игровое поле после попытки его решить.
   * Договорись со своей командой, в каком формате возвращать этот результат.
  */

}

function isSolved(board) {
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
        if (data[i][j] == '.') {
          for (let k = 1; k <= 9; k++) {
            if (isValid(data, i, j, k)) {
              data[i][j] = `${k}`;
              if (sodokoSolver(data)) {
                return true;
              }
              data[i][j] = '.';
            }
          }
          return false;
        }
      }
    }
    return true;
  }
}

function prettyBoard(board) {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает строку с игровым полем для последующего вывода в консоль.
   * Подумай, как симпатичнее сформировать эту строку.
   */

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
