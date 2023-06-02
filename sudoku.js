/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {

  function getString(boardString) {
    const board = boardString.split('\n').join('').split('');
    return board;
  }
}
console.log(getString('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'))

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
let newBoard = Array.isArray(board)
for (let i = 0; i < 9; i++) {
  if(!isNaN(newBoard[row][column])) {
    return false
  }
  else {
    return true;
  }
}
}

//   for(let i = 0; i < board.length; i++) {
//     const rows = 3 * Math.floor(board.row / 3) + Math.floor(i / 3)
//     const column = 3 * Math.floor(board.column / 3) + i % 3
//     if (board[rows][column] === board[board.row][board.column] && (rows !== board.row || column !== board.column)) {
//   }
//   return true
// }
// return false
// }

// board.row && board.column могут быть названы по другому в других ветках, нужно иметь это ввиду

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
