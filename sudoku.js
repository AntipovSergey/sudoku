/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solve(boardString) { 
  let arr = [];
  for(let i = 0; i < boardString.length; i += 1){
    arr.push(boardString[i])
    console.log(arr)
  }
}

//  const array = [
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
// ]


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  let line = [];
  let vertical = [];
  let square = [];
  for (let i = 0; i < board.length; i++) {
    line = board[i];
    for (let j = 0; j < board.length; j++) {
      if (line.indexOf(line[j]) !== line.lastIndexOf(line[j])) return false; 
    }
  }
  for (let i = 0; i < board.length; i++) {
    vertical = [];
    for (let j = 0; j < board.length; j++) {
      vertical.push(board[j][i]);
      if (vertical.indexOf(vertical[j]) !== vertical.lastIndexOf(vertical[j])) return false;
    }
  }
  // for (let i = 0; i < 3; i++) {
  //   for (let j = 0; j < 3; j++) {
  //     square.push(board[i][j]);
  //   }
  // }
  return true;
}

// console.log(isSolved(array));
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
