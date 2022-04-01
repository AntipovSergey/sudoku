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
function sudokuParse(puzzleNumber = 0) {
  let content = fs.readFileSync('./sudoku-puzzles.txt','utf-8')
  let arr = []
  let puzzle = content.split('\n')[puzzleNumber];
  console.log(puzzle);
  console.log('parser');
  return puzzle;
}

function readAndSolve(err, data) {
  if (err) {
    throw err;
  }
  let puzzle = sudokuParse(data);

  let solvedPuzzle = sudoku.solveSudoku(puzzle);
  if (sudoku.isSolved(solvedPuzzle)) {
    console.log("The board was solved!");

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


module.exports = sudokuParse
