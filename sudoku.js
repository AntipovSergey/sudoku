/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  // функция Димы
  function fullBoard (board) {
    let arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let boardFull = [];
    for (let i = 0; i < board.length; i += 1) {
      for (let j = 0; j < arrOfNumbers.length; i += 1) {
        if (!board.includes(arrOfNumbers[j])){
          let index = board[i].findIndex(0)
          board[i][index] = arrOfNumbers[j]
        } fullBoard (board)
        } 
    }
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

console.log('Hello from Daya')










