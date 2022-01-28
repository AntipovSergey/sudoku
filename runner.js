// Use filesystem.
const fs = require('fs');
// Use functions from sudoku.js file.
const sudoku = require('./sudoku');

// The sudoku puzzles that your program will solve can be found
// in the sudoku-puzzles.txt file.
//
// Remember, the file has newline characters at the end of each line,
// so you should remove them.

// Gets one puzzle from the text file.
function sudokuParse(content, puzzleNumber = 0) {
  let puzzle = content.split('\n')[puzzleNumber];
  console.log(puzzle);
  return puzzle;
}

function readAndSolve(err, data) {
  if (err) {
    throw err;
  }
  for (let i = 0; i < 5; i++) {
    let puzzle = sudokuParse(data, i);

    let solvedPuzzle = sudoku.solve(puzzle);
    if (sudoku.isSolved(solvedPuzzle)) {
      console.log("\x1B[32mThe board was solved!\x1B[0m");
      console.log(sudoku.prettyBoard(solvedPuzzle));
    }
    else {
      console.log("\x1B[31m The board wasn't solved :( \x1B[0m");
    }
  }
}

// Reads file and sends data from it to the readAndSolve function.
fs.readFile(
  './sudoku-puzzles.txt',
  'utf-8',
  readAndSolve
);

