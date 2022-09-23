/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  let firstString = Array.from(boardString.slice(0, 9))
  let secondString = Array.from(boardString.slice(9, 18))
  let thirdString = Array.from(boardString.slice(18, 27))
  let forthString = Array.from(boardString.slice(27, 36))
  let fiveString = Array.from(boardString.slice(36, 45))
  let sixString = Array.from(boardString.slice(45, 54))
  let sevenString = Array.from(boardString.slice(54, 63))
  let eigthString = Array.from(boardString.slice(63, 72))
  let nineString = Array.from(boardString.slice(72, 81))

  const board = [firstString, secondString, thirdString, forthString, fiveString, sixString, sevenString, eigthString, nineString]
  



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
