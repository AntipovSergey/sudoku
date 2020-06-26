// Use filesystem.
const fs = require("fs");
// Use functions from sudoku.js file.
const sudoku = require("./sudoku");
const { goingThrough, finalCheck } = require("./gorversqa");

// The sudoku puzzles that your program will solve can be found
// in the sudoku-puzzles.txt file.
//
// Remember, the file has newline characters at the end of each line,
// so you should remove them.

// Gets one puzzle from the text file.
function sudokuParse(content, puzzleNumber = 0) {
  let puzzle = content.split("\n")[puzzleNumber];
  console.log(puzzle);
  return puzzle;
}

function readAndSolve(err, data) {
  if (err) {
    throw err;
  }
  let puzzle = sudokuParse(data);
  let parsedPuzzle = sudoku.solve(puzzle);
  console.table(parsedPuzzle);
  let aer = finalCheck(parsedPuzzle);

  // let aer = goingThrough(parsedPuzzle);
  console.table(aer);
}

// Reads file and sends data from it to the readAndSolve function.
fs.readFile("./sudoku-puzzles.txt", "utf-8", readAndSolve);
