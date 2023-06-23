/**
 * Принимает строку с данными и конвертирует её в двумерный массив
 */

function convertString(str) {
  const arrayWithElements = str.split('');
  // console.log(arrayWithElements);
  const chunk = 9;
  let board = [];
  for (let i = 0; i < arrayWithElements.length; i += chunk) {
    board.push(arrayWithElements.slice(i, i + chunk));
  }

  return board;
}
console.log(convertString(string))
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {}

function solveSimple(boardString) {}
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

function prettyBoard(board) {
let pretty1 = board.flat().join(' ')

pretty1 = pretty1.toString()

pretty1 = 
pretty1.substring(0, 17)
+ '\n' + pretty1.substring(18, 35)
+ '\n' + pretty1.substring(36, 53) 
+ '\n' + '-----------------'
+ '\n' + pretty1.substring(54, 71)
+ '\n' + pretty1.substring(72, 89)
+ '\n' + pretty1.substring(90, 107)
+ '\n' + '-----------------'
+ '\n' + pretty1.substring(108, 125)
+ '\n' + pretty1.substring(126, 143)
+ '\n' + pretty1.substring(144, 161)

console.log(pretty1)
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
}