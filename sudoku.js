/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

const fs = require('fs');

const puzzle = fs.readFileSync('./puzzles.txt', 'utf-8').trim().split('\n');
// console.log(puzzle)

function createboard(puzzle) {
  const size = 9;
  const board = [];
  const newArre = puzzle.split('');
  for (let i = 0; i < puzzle.length; i += size) {
    board.push(puzzle.splice(0, size));
  }
  return board
}
// console.table(createboard(puzzle[0]))

function solve(str) {
  const size = 9;
  const board = [];
  const newArre = str.split('');
  // console.log(newArre);
  for (let i = 0; i < newArre.length; i += size) {
    board.push(newArre.slice(i, i + size));
  }
  return board;
}

// console.log(solve(boardString))
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
*/
function findEmpty(board) {
  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board.length[row]; column++) {
      if (board[row][column] === '-') {
        return [row, column];
      }
    }
    return false;
  }
}
console.log(findEmpty(board));

function isSolved(number, pos, board) {
  const [row, column] = pos;
  const boxSize = 3;
  const size = 9;

  for (let i = 0; i < size; i++) {
    if (board[i][column] === number && i !== row) {
      return false;
    }
  }

  for (let i = 0; i < size; i++) {
    if (board[row][i] === number && i !== column) {
      return false;
    }
  }

  const boxRow = Math.floor(row / boxSize) * boxSize;
  const boxColumn = Math.floor(column / boxSize) * boxSize;

  for (let i = boxRow; i < boxRow + boxSize; i++) {
    for (let j = boxColumn; j < boxColumn + boxSize; j++) {
      if (board[i][j] === number && i !== row && j !== column) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board)








module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
