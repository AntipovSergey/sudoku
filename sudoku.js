/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solve(boardString) {
  const board = [];
  const preBoard = boardString.split('');

  for (let i = 0; i < preBoard.length; i++) {
    if (i === 0) {
      const arrStr = preBoard.slice(0, 9);
      board.push(arrStr);
    }
    if (!(i % 9) && i !== 0) {
      const arrStr = preBoard.slice(i, i + 9);
      board.push(arrStr);
    }
  }

  const findempty = (board) => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] === '-') {
          return [i, j];
        }
      }
    }
    return null;
  };
}
console.log(!!!);
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
