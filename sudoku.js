// const fs = require('fs');

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
  const horizontal = [];
  for (let row = 0; row < 9; row++) {
    const rowValues = [];
    for (let col = 0; col < 9; col++) {
      rowValues.push(board[row][col]);
    }
    const missNum = missingNumbers(rowValues);
  }
}
function missingNumbers(arr) {
  const findmissNumbers = [];
  for (let i = 0; i < 9; i++) {
    if (!arr.includes[i]) {
      findmissNumbers.push[i];
    }
  }
  return findmissNumbers;
}

// function RowCol(board, y, x, n) {
//   for (let i = 0; i < 9; i++) {
//     if (board[y][i] === n || board[i][x] === n) {
//       return false;
//     }
//   }
// // }
// function readAndSolve(files) {
//   const fileData = fs.readFileSync(files, 'utf-8').slice(0, 81);
//   const sudokuArray = [];

//   for (let i = 0; i < fileData.length; i += 9) {
//     sudokuArray.push(fileData.slice(i, i + 9).split(''));
//   }
//   return sudokuArray;

//   // console.table(sudokuArray);
// }
// const array = readAndSolve();

function RowCol(array, y, x, square, n) {
  for (let i = 0; i < 9; i++) {
    if (array[y][i] === n || array[i][x] === n || array[square][i] === n) {
      return false;
    }
  } return true;
}
console.log(RowCol(array, 0, 0, 0, 1));

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
  CheckHorizontal,
  missingNumbers,
  RowCol,
};
