const fs = require('fs');

const text = fs.readFileSync('sudoku-puzzles.txt', 'utf-8');
const board = text.split('\n')[0];
// console.log(board);

const table = () => {
  const arr = [];
  for (let i = 0; i < board.length; i += 9) {
    arr.push(board.slice(i, i + 9).split(''));
  }
//   console.table(arr)
  return arr;
};
table(board);

module.exports = table();
