// const board = [
//   ['1 - 5 8 - 2 - - -']
//   ['- 9 - - 7 6 4 - 5']
//   ['2 - - 4 - - 8 1 9']
//   ['- 1 9 - - 7 3 - 6']
//   ['7 6 2 - 8 3 - 9 -']
//   ['- - - - 6 1 - 5 -']
//   ['- - 7 6 - - - 3 -']
//   ['4 3 - - 2 - 5 - 1']
//   ['6 - - 3 - 8 9 - -']
// ];


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
function isSolved() {

}


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}

/* 
Проверка по горизонтали
*/
// function CheckHorizontal(h) {
//   for(let i = 0; i < 9; i++) {
//     if(h == board[row][i])
//     return false
//   }
// }

function CheckHorizontal(sudokuBoard) {
  const horizontal = []
  for(let row = 0; row < 9; row++) {
    const rowValues = []
    for( let col= 0; col < 9; col++) {
    rowValues.push(board[row][col])
    }
    const missNum = missingNumbers(rowValues)
  }
}
function missingNumbers(arr) {
  const findmissNumbers = []
  for( let i =0 ; i < 9; i++) {
    if(!arr.includes[i]) {
      findmissNumbers.push[i]
    }
  }
  return findmissNumbers
}

function RowCol(board, y, x, square, n) {
  for (let i = 0; i < 9; i++) {
    if (board[y][i] === n || board[i][x] === n || board[square][i] === n) {
      return false;
    }
  }
}

function checkBox(sudokuBoard) {
  const square = [];
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const boxValues = [];
      for (let d = i; d < i + 3; d++) {
        for (let f = j; f < j + 3; f++) {
          boxValues.push(sudokuBoard[d][f]);
        }
      }
      const missNum = missingNumbers(boxValues);
      square.push({ box: `(${i / 3}, ${j / 3})`, missing: missNum });
    }
  }
  return square;
}
// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
