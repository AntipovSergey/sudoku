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
function isSolved(num, pos, board) {
  const [r, c] = pos;

  for (let i = 0; i < size; i++) {
    if (board[i][c] === num && i !== r) {
      return false;
    }
  }

  for (let i = 0; i < size; i++) {
    if (board[r][i] === num && i !== c) {
      return false;
    }
  }

  const boxRow = Matn.floor(r / boxSize) * boxSize;
  const boxCol = Math.floor(c / boxSize) * boxSize;

  for (let i = boxRow; i < boxRow + boxSize; i++) {
    for (let j = boxCol; j < boxCol + boxSize; j++) {
      if (board[i][j] === num && i !== r && j !== c) {
        return false;
      }
    }
  }
  return true;
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
