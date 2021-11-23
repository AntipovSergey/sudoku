const fs = require('fs');
const sudokuParse = require('./runner');

const content = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');

const empty = require('./empty');
const check = require('./test');
const checkSector = require('./checkSector');

const board = sudokuParse(content, 14);

console.table(board);
function numbers(board2, arrNew2) {
  if (empty(board2) === null) {
    return true;
  }
  const x = arrNew2[0];
  const y = arrNew2[1];
  for (let i = 1; i < 10; i++) {
    if (check(board2, arrNew2, i) && checkSector(board2, i, arrNew2)) {
      board[x][y] = i;
      if (numbers(board, empty(board))) {
        return board;
      }
      board[x][y] = 0;
    }
  }
  return false;
}
console.table(numbers(board, empty(board)));

module.exports = numbers;
