const { log } = require('console');
const { CLIENT_RENEG_WINDOW } = require('tls');

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
const fs = require("fs");

const board = fs.readFileSync("./puzzles.txt", "utf8");
const regexp = /.{81}/g;
const boardArr = board.match(regexp);
console.log(boardArr[0]);



function solve(boardString) {
  function arrayedString() {
    const array = boardString.split("");
    let step = 9;
    let res = [];
    for (let i = 0; i < array.length; i += step) {
      res.push(array.slice(i, i + step));
    }
    return res;
  }
  let matrix = arrayedString()
  return matrix
}
// console.log(solve())
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  const line = board.map((el) => !el.join('').includes('-'));
  return !line.includes(false);
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  let result = '';
  for (let i = 0; i < board.length; i++) {
    result += `${board[i].join('')}\n`;
  }
  return result.trim();
}
const sudokuArray = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];
const sudokuString = prettyBoard(sudokuArray);
console.log(sudokuString);

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
