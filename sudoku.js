/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
const fs = require('fs');

solve(fs.readFileSync('./puzzles.txt', 'utf8'));

function solve(boardString) {
  const cur = boardString.split('\n')[0];
  const sudoku = [];
  for (let i = 0; i < cur.length; i += 9) {
    const temp = cur.slice(i, 9 + i);
    sudoku.push(temp.split(''));
  }
  for (let j = 0; j < cur.length; j++) {
    if (sudoku[0][j] == '-') {
      checkSquare(sudoku, 0, j);
      break;
    }
  }
  console.log(checkHorizontalLine(sudoku[0]));
  console.log(checkVerticalLine(sudoku, 0));
}
function checkHorizontalLine(arr) {
  const need = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr.includes(String(i + 1))) { need.push(String(i + 1)); }
  }
  return need;
}
function checkVerticalLine(arr, vertical) {
  const need = [];
  for (let i = 0; i < arr.length; i++) {
    let ok = true;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][vertical] == String(i + 1)) {
        ok = false;
      }
    }
    if (ok) {
      need.push(String(i + 1));
    }
  }
  return need;
}
function checkSquare(arr, indexX, indexY) {
  const need = [];
  const square = [];
  const column = Math.floor(indexY / 3) * 3;
  const row = Math.floor(indexX / 3) * 3;
  for (let i = column; i < column + 3; i++) {
    for (let j = row; j < row + 3; j++) {
      square.push(arr[i][j]);
    }
  }
  for (let i = 0; i < square.length; i++) {
    if (!square[i].includes(String(i + 1))) {
      console.log(square[0][i]);

      need.push(String(i + 1));
    }
  }
  console.log(need);
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

const arr = [
  ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
  ['-', '9', '-', '-', '7', '6', '4', '-', '5'],
  ['2', '-', '-', '4', '-', '-', '8', '1', '9'],
  ['-', '1', '9', '-', '-', '7', '3', '-', '6'],
  ['7', '6', '2', '-', '8', '3', '-', '9', '-'],
  ['-', '-', '-', '-', '6', '1', '-', '5', '-'],
  ['-', '-', '7', '6', '-', '-', '-', '3', '-'],
  ['4', '3', '-', '-', '2', '-', '5', '-', '1'],
  ['6', '-', '-', '3', '-', '8', '9', '-', '-'],
];
console.table(arr);
