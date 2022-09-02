/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(board) {
  const cols = board.length;
  const boarded = board;

  for (let r = 0; r < cols; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      if (board[r][c] === '-') {
        for (let k = 1; k < cols + 1; k += 1) {
          if (boarded[c][k] === k.toString()) return false;
          if (boarded[k][c] === k.toString()) return false;
          // eslint-disable-next-line no-use-before-define
          if (getCheckBox(r, c, k)) boarded[r][c] = k.toString();
        }
      }
    }
  }
  function getCheckBox(r, c, k) {
    const row = Math.floor((r / 3) * 3);
    const col = Math.floor((c / 3) * 3);
    for (let a = 0; a < 3; a += 1) {
      for (let b = 0; b < 3; b += 1) {
        if (boarded[row + r][col + c] === k.toString()) return false;
      }
    }
    return true;
  }
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
