// const fs = require('fs');
// const boardString = fs.readFileSync('./puzzles.txt', 'utf-8');
// console.log(boardString);

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

//  1 - 5 8 - 2 - - -
//  - 9 - - 7 6 4 - 5
//  2 - - 4 - - 8 1 9
//  - 1 9 - - 7 3 - 6
//  7 6 2 - 8 3 - 9 -
//  - - - - 6 1 - 5 -
//  - - 7 6 - - - 3 -
//  4 3 - - 2 - 5 - 1
//  6 - - 3 - 8 9 - -

// 1-58-2---
// -9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--

function solve(boardString) {
  // Разбивка задачи на массив 9x9
  const newBoardString = boardString.split('');
  let board = [];

  for (let i = 0; i < newBoardString.length; i += 0) {
    board.push(newBoardString.slice(i, i += 9));
  }

  console.table(board);
  return board;
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
