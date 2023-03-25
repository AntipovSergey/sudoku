const fs = require('fs');

const board = fs.readFileSync('./puzzles.txt', 'utf-8');
const arrayBoard = board.split('\n');
const boardString = arrayBoard[process.argv[2]];

function arrayFromBoard(boardString) {
  const board = [];
  let index = 0;
  for (let i = 0; i < 9; i++) {
    const row = [];
    for (let j = 0; j < 9; j++) {
      const char = boardString.charAt(index);
      if (char === '-') {
        row.push(0);
      } else {
        row.push(parseInt(char));
      }
      index++;
    }
    board.push(row);
  }
  return board
}
arrayFromBoard(boardString);
const boardArrays = arrayFromBoard(boardString);

function isValid(boardArrays, row, col, num) {
  for (let i = 0; i < boardArrays.length; i++) {
    if (boardArrays[row][i] === num) {
      return false;
    }
  }
  for (let i = 0; i < boardArrays.length; i++) {
    if (boardArrays[i][col] === num) {
      return false;
    }
  }
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  for (let i = boxRow; i < boxRow + 3; i++) {
    for (let j = boxCol; j < boxCol + 3; j++) {
      if (boardArrays[i][j] === num) {
        return false;
      }
    }
  }

  return true;
}

function solve(boardArrays, row, col) {
  if (row === boardArrays.length) {
    // console.log(row);
    return true;
  }

  if (col === boardArrays.length) {
    // console.log(col);
    return solve(boardArrays, row + 1, 0);
  }

  if (boardArrays[row][col] !== 0) {
    return solve(boardArrays, row, col + 1);
  }

  for (let num = 1; num <= 9; num++) {
    if (isValid(boardArrays, row, col, num)) {
      boardArrays[row][col] = num;
      if (solve(boardArrays, row, col + 1)) {
        return true;
      }
      boardArrays[row][col] = 0;
    }
  }

  return false;  
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved() {
  console.clear()
  console.log(`Решаем судоку №${process.argv[2]}:`);
  console.log(boardArrays.join('\n'), '\n');
if (solve(boardArrays,0,0)){
console.table(boardArrays);  
console.log(`Судоку №${process.argv[2]} решён успешно!`);
}
}
isSolved(boardString);
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
