/**
 * Принимает строку с данными и конвертирует её в двумерный массив
 */
function convertString(str) {
  const arrayWithElements = str.split('');
  const chunk = 9;
  let board = [];
  for (let i = 0; i < arrayWithElements.length; i += chunk) {
    board.push(arrayWithElements.slice(i, i + chunk));
  }

  return board;
}

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  let statementrow;
  let statementcol;
  for (row = 0; row < board.length; row++) {
    const check = arr[i];
    for (let i in check) {
      if (check.indexOf(i) === check.lastIndexOf(i)) {
        statementrow = true;
      }
    }
  }
  for (col = 0; col < board.length; col++) {
    for (row = 0; row < board.length; row++) {
      const arr = [];
      arr.push(board[row][col]);
      for (let i in arr) {
        if (check.indexOf(i) === check.lastIndexOf(i)) {
          statementcol = true;
        }
      }
    }
  }
}

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
// console.log(
//   convertString(
//     '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
//   )
// );
