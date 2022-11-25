/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
const fs = require('fs');

const txt = fs.readFileSync('./puzzles.txt', 'utf8');

const boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

function solve(boardString) {
  let newBoard = boardString.split('')
  let board = [];
  for(let i = 0; i < boardString.length; i += 9) {
    board.push(newBoard.slice(i, i + 9))
  }



  for(let i = 0; i < board.length; i++) {
    for (let j = 0; j <= 9; j ++) {
      if(board[i][j] === '-') {
        let num = i.toString()
        board[i] .includes(num) ? num = i + 1 : i
            board[i][j] = num
        }
    }
  }
return board
}

console.table(solve(boardString))












// [
//   [[135] [842] [---]] [[135] [842] [---]] [[135] [842] [---]]

// [
// [39--764-5]
// [2--4--819]
// -19--73-6
// 762-83-9-
// ----61-5-
// --76---3- 
// 43--2-5-1
// 6--3-89--]
// ]


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
