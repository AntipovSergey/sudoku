const fs = require('fs');

const sudoku = fs.readFile('./puzzles.txt', 'utf-8').split('\n');
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
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

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
    const res = solve(board)
        if (res !== undefined || res === 405 * 9) {
          return true
        }
        return false
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
