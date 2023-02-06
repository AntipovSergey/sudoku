/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solve(boardString) {
  const arr = boardString.split("");
  const board = [];
  const sqwrs = [];

  for (let i = 0; i < 9; i++) {
    board.push(arr.slice(0, 9));
    arr.splice(0, 9);
  }

  let a = 0;
  let b = 3;
  for (let g = 0; g < 3; g++) {
    let x = 0;
    let y = 3;
    for (let h = 0; h < 3; h++) {
      let nmbrs = [];
      for (let i = a; i < b; i++) {
        for (let j = x; j < y; j++) {
          nmbrs.push(board[i][j]);
        }
      }
      sqwrs.push(nmbrs);
      x += 3;
      y += 3;
    }
    a += 3;
    b += 3;
  }

  console.log(sqwrs);
}
solve(boardString);

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {}

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
