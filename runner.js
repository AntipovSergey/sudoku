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
function sudokuParse(content) {
  return content.split('\n');
}

function readAndSolve(err, data) {
  if (err) {
    throw err;
  }
  let puzzle = sudokuParse(data);
  for (let i = 0; i < puzzle.length; i++ ) {
    if (!puzzle[i].length) continue;

    let solvedPuzzle = sudoku.solve(puzzle[i]);
    if (sudoku.isSolved(solvedPuzzle)) {
      console.log("The board was solved!");
      console.log(sudoku.prettyBoard(solvedPuzzle));
    }
    else {
      console.log("The board wasn't solved :(");
    }
  }
}

// Reads file and sends data from it to the readAndSolve function.
fs.readFile(
  './sudoku-puzzles.txt',
  'utf-8',
  readAndSolve
);

