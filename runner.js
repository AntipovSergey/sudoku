const fs = require('fs');
const {
  read, solve, findCellValues, findZeroes,
} = require('./sudoku');

const filename = `${__dirname}/puzzles.txt`;

function toArray(filename) {
  const puzzles = fs
    .readFileSync(filename, 'utf-8')
    .split('\n');

  return puzzles;
}

function run() {
  const puzzles = toArray(filename);
  const num = 0;
  const sudoku = read(puzzles, num);
  const arrNull = findZeroes(sudoku);
  const answer = solve(arrNull, sudoku);
  return answer;
}

console.log(run);

module.exports = {};
