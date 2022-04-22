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
    console.log(content);
  const puzzle = content.split('\n')[puzzleNumber];
  console.log(puzzle);
  console.log('parser');
  return puzzle;
}
// console.log(sudokuParse())
function readAndSolve(err, data) {
  if (err) {
    throw err;
  }
  console.log(data);
  const puzzle = sudokuParse(data);

  const solvedPuzzle = sudoku.solve(puzzle);
  if (sudoku.isSolved(solvedPuzzle)) {
    console.log('The board was solved!');
    console.log(sudoku.prettyBoard(solvedPuzzle));
  } else {
    console.log("The board wasn't solved :(");
  }
}

// Reads file and sends data from it to the readAndSolve function.
const data = fs.readFileSync(
  './sudoku-puzzles.txt',
  'utf-8',
//   readAndSolve,
);
readAndSolve(null,data)
// console.log(data);