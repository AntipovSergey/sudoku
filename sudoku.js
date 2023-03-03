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

function isSolved(board) {
  let answer = true
  // проверка по строкам
  for (let r = 0; r < board.length; r += 1) {
    let res = 0;
    for (let c = 0; c < board.length; c += 1) {
      res += Number(board[r][c]);     
    }
    if (res !== 45) {
      answer = false
    }  
  }
  // прооверка по столбцам
  for (let c = 0; c < board.length; c += 1) {
    let res = 0;
    for (let r = 0; r < board.length; r += 1) {
      res += Number(board[r][c]);
    }
    if (res !== 45) {
      answer = false
    }   
  }
  return answer
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
