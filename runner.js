const fs = require('fs');

const sudoku = require('./sudoku');

// Gets one puzzle from the text file.
function sudokuParse(content, puzzleNumber = 0) {
  const puzzle = content.split('\n')[puzzleNumber];
  for (let i = 0; i < puzzle.length; i += 9) {
    console.log(puzzle);
    console.log('parser');
  }

function readAndSolve(err, data) {
  if (err) {
    throw err;
  }
  let puzzle = sudokuParse(data);

  let solvedPuzzle = sudoku.solve(puzzle);
  if (sudoku.isSolved(solvedPuzzle)) {
    // console.log("The board was solved!");
    // console.log(sudoku.prettyBoard(solvedPuzzle));
  }
  else {
    console.log("The board wasn't solved :(");
  }
}


fs.readFile(
  './sudoku-puzzles.txt',
  'utf-8',
  readAndSolve,
);


