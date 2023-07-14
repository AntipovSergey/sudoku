const fs = require("fs");
// console.log(board)
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
const fs = require("fs");
const puzzles = fs.readFileSync("./puzzles.txt", "utf-8");

const transformatedPuzzles = (num) => {
  const transformated = puzzles.split("\n")[num - 1];
  const tempArr = [];
  for (let i = 0; i < 9; i += 1) {
    tempArr[i] = transformated.slice(0 + i * 9, 9 + i * 9).split("");
  }
  return tempArr;
};
console.log(transformatedPuzzles(1));
function solve(boardString) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === "-") {
        return false; // судоку не решено, потому что есть пустые ячейки '-'
      }
    }
  }
  return true; // судоку решено
}
console.log()

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
