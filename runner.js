// Use filesystem.
const fs = require('fs');
// Use functions from sudoku.js file.
//const sudoku = require('./sudoku');
const sudoku_a = require('./sudoku_a');
const sudoku_s = require('./sudoku_s');
const sudoku_w = require('./sudoku_w');

// The sudoku puzzles that your program will solve can be found
// in the sudoku-puzzles.txt file.
//
// Remember, the file has newline characters at the end of each line,
// so you should remove them.

// Gets one puzzle from the text file.
function sudokuParse(content, puzzleNumber = 1) {
  let puzzle = content.split('\n')[puzzleNumber];
  return puzzle;
}

function readAndSolve(err, data) {
  if (err) {
    throw err;
  }
  let puzzle = sudokuParse(data);
  let solvedPuzzle = sudoku_w.solve(puzzle);
  if (sudoku_s.isSolved(solvedPuzzle)) {
    console.log("The board was solved!");
    console.log(sudoku_a.prettyBoard(solvedPuzzle));
    sudoku_a.prettyBoard(solvedPuzzle);
  }
  else {
    console.log("The board wasn't solved :(");
  }
}

// Reads file and sends data from it to the readAndSolve function.
fs.readFile(
  './sudoku-puzzles.txt',
  'utf-8',
  readAndSolve
);

