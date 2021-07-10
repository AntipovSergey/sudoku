const fs = require('fs');
const sudoku = require('./sudoku');
fs.readFile('./sudoku-puzzles.txt', 'utf-8', readAndSolve);

function readAndSolve(err, data) {
  if (err) throw err;
  let puzzle = data.split('\n');;
  for (let i = 0, j = 1; i < puzzle.length - 1; i++, j++) {
    console.log(`Судоку №${j} решена!`)
    console.table(sudoku.isSolved(sudoku.solve(puzzle[i])));
  }
}
