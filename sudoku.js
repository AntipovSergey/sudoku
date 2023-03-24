/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
const readAndSolve = require('./runner.js');

function solve(boardString) {

    }
    
    function findValHor(empty) {
      let z = []
      let [p, m] = empty;
        for (let i = p; i <=  p; i ++) {
          for (let j = 0; j < 9; j ++) {
              if (empty[i][j] === number) {
               return false
              }
          }
          return true
        }
      }

      function findValVer(empty) {
        let z = [];
        let [p, m] = empty;
          for (let i = m; i <=  m; i ++) {
            for (let j = 0; j < 9; j ++) {
                if (findEmpty[j][i] === number) {
                 return false
                }
            }
            return true
          }
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
