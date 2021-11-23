const fs = require('fs');
const brainFuck = require('./brainFuck');

const sudokuPuzzles = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');

function sudokuParse(content, puzzleNumber = 0) {
  const puzzle = content.split('\n')[puzzleNumber];
  const arr = [];
  for (let i = 0; i < 81; i += 9) {
    arr.push(puzzle.slice(i, i + 9).split(''));
  }
  return brainFuck(arr);
}

// console.table(sudokuParse(sudokuPuzzles, 14));
for (let index = 0; index < 15; index++) {
  console.table(sudokuParse(sudokuPuzzles, index));
}
