/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const validate = (num, pos, board) => {
    // в массиве num строка или число ??
    const [x, y] = pos;

    // Проходим по рядам
    for (let i = 0; i < 9; i += 1) {
      if (board[i][y] === num && i !== x) {
        return false;
      }
    }

    // Проходим по колонкам
    for (let i = 0; i < 9; i += 1) {
      if (board[x][i] === num && i !== y) {
        return false;
      }
    }

    // Проходим по квадратам
    const rowStart = Math.floor(x / 3) * 3;
    const colStart = Math.floor(y / 3) * 3;

    for (let i = rowStart; i < rowStart + 3; i++) {
      for (let j = colStart; j < colStart + 3; j++) {
        if (board[i][j] === num && i !== x && j !== y) {
          return false;
        }
      }
    }
    return true;
  };
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
