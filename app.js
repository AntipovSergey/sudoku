const fs = require('fs');

const sudokuPuzzles = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');

function sudokuParse(content, puzzleNumber = 0) {
  const puzzle = content.split('\n')[puzzleNumber];
  const arr = [];
  for (let i = 0; i < 81; i += 9) {
    arr.push(puzzle.slice(i, i + 9).split(''));
    console.log(puzzle.slice(i, i + 9));
  }
  console.log(puzzle.length);
  return arr;
}

console.log(sudokuParse(sudokuPuzzles));
