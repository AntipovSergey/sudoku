const switcher = require('./forSolve.js');
const solved = require('./slav.js');
const boardString = require('./createTable');


/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
let newString = boardString();
function solve(newString, stepsNum = 0) {

  if (stepsNum > 80) {
    return newString.join(' \n')
  }
  stepsNum = stepsNum + 1

  let result = switcher.switcher(newString)
  if (solved(result) == false) {
    return solve(result, stepsNum)
  }

  return newString.join(' \n')


}

console.log(solve(newString))

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
