/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

const board = [
[1, 4, 5, 8, 9, 2, 6, 7, 3],
[8, 9, 3, 1, 7, 6, 4, 2, 5],
[2, 7, 6, 4, 3, 5, 8, 1, 9],
[5, 1, 9, 2, 4, 7, 3, 8, 6],
[7, 6, 2, 5, 8, 3, 1, 9, 4],
[3, 8, 4, 9, 6, 1, 7, 5, 2],
[9, 5, 7, 6, 1, 4, 2, 3, 8],
[4, 3, 8, 7, 2, 9, 5, 6, 1],
[6, 2, 1, 3, 5, 8, 9, 4, 7],
];
function isSolved(board) {
  // проверяем строку
  for (let row = 0; row < 9; row++) {
    const usedNumbers = new Set();
    for (let col = 0; col < 9; col++) {
      const cell = board[row][col];
      if (cell < 1 || cell > 9 || usedNumbers.has(cell)) {
        console.log(new Set())
        return false;
      }
      usedNumbers.add(cell);
    }
  }

  // проверяем столбец
  for (let col = 0; col < 9; col++) {
    const usedNumbers = new Set();
    for (let row = 0; row < 9; row++) {
      const cell = board[row][col];
      if (usedNumbers.has(cell)) {
        return false;
      }
      usedNumbers.add(cell);
      // console.log(cell)
    }
  }

  // проверяем 3x3 subgrids
  for (let sqareRow = 0; sqareRow < 3; sqareRow++) {
    for (let sqareCol = 0; sqareCol < 3; sqareCol++){
      const usedNumbers = new Set();
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          const cell = board[3 * sqareRow + row][3 * sqareCol + col];
          if (usedNumbers.has(cell)) {
            return false;
          }
          usedNumbers.add(cell);
        }
      }
    }
  }

  return true;
}

console.log(isSolved(board))
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
