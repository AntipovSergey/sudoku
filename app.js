const fs = require('fs');

const sudokuPuzzles = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');

function sudokuParse(content, puzzleNumber = 0) {
  let puzzle = content.split('\n')[puzzleNumber];
  console.log(puzzle);
  return puzzle;
}


sudokuParse(sudokuPuzzles);
sudokuParse(sudokuPuzzles, 1);
sudokuParse(sudokuPuzzles, 2);
sudokuParse(sudokuPuzzles, 3);
sudokuParse(sudokuPuzzles, 4);
