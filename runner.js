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
let puzzleNumber = 0
function sudokuParse(content) {
  let puzzle = content.split('\n')[puzzleNumber];
  return puzzle;
}

function readAndSolve(err, data, index) {
  if (err) {
    throw err;
  }
  let puzzle = sudokuParse(data, index);

  let solvedPuzzle = sudoku.solve(puzzle);
  if (sudoku.isSolved(solvedPuzzle)) {
    console.log("The board was solved!");
    console.log(sudoku.prettyBoard(solvedPuzzle));
  }
  else {
    console.log("The board wasn't solved :(");
  }
}

// Reads file and sends data from it to the readAndSolve function.
setInterval(() => {
  fs.readFile(
    './sudoku-puzzles.txt',
    'utf-8',
    readAndSolve
  );
if (puzzleNumber < 16) {
  puzzleNumber++
}
}, 2000);

