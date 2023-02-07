/* eslint-disable no-labels */
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

let boardString =
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";

function solve(boardString) {
  const arr = boardString.split("");
  const board = [];

  for (let i = 0; i < 9; i++) {
    board.push(arr.slice(0, 9));
    arr.splice(0, 9);
  }
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  for (let i = 1; i <= 9; i++) {
    if (board.indexOf(i) === -1) {
      return false;
    }
  }

  return true;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  let result = [];
  for (let i = 0; i < board.length; i += 1) {
    let newArray1 = board[i].slice(0, 3);
    if (i === 0) newArray1.unshift("\n");
    if (i === 3 || i == 6) newArray1.unshift("---------------------", "\n");
    newArray1.push(
      "|",
      board[i].slice(3, 6).join(" "),
      "|",
      board[i].slice(6).join(" "),
      "\n"
    );
    result.push(newArray1.join(" "));
  }

  return result.join(" ");
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
