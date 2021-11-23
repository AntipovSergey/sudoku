const fs = require('fs');
const solve = require('@mattflow/sudoku-solver');

const sudokuPuzzles = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');

function sudokuSolver2_1(content, puzzleNumber = 0) {
  const puzzle = content.split('\n')[puzzleNumber].replace(/-/gm, '0');
  const solved = solve(puzzle);
  const solvedArr = [];
  for (let i = 0; i < 81; i += 9) {
    solvedArr.push(solved.slice(i, i + 9).split(''));
  }
  return solvedArr;
}

console.table(sudokuSolver2_1(sudokuPuzzles));
