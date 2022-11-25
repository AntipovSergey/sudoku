/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  
  let arr = []
  let preBoard = boardString.split('')
  for (let i = 0; i < preBoard.length; i += 9) {
    arr.push(preBoard.slice(i, i + 9))
  }
  //преобразуем строку в доску судоку
  let board = arr.map(el => el.map(item => item === '-' ? item = 0 : Number(item)))

  let boardRandom = board.map(el => el.map(item => item === 0 ? item = Math.floor(Math.random()*9)+1 : item))
  return console.table(boardRandom)
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
