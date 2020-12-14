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
  const rightBoard =
  [
    [1, 4, 5, 8, 9, 2, 6, 7, 3],
    [8, 9, 3, 1, 7, 6, 4, 2, 5],
    [2, 7, 6, 4, 3, 5, 8, 1, 9],
    [5, 1, 9, 2, 4, 7, 3, 8, 6],
    [7, 6, 2, 5, 8, 3, 1, 9, 4],
    [3, 8, 4, 9, 6, 1, 7, 5, 2],
    [9, 5, 7, 6, 1, 4, 2, 3, 8],
    [4, 3, 8, 7, 2, 9, 5, 6, 1],
    [6, 2, 1, 3, 5, 8, 9, 4, 7]
  ];
  let puzzle = sudokuParse(data, 0);
  let solvedPuzzle = sudoku.solve(puzzle);

  if (sudoku.isSolved(solvedPuzzle)) {
    console.log(sudoku.prettyBoard(solvedPuzzle));
    if (sudoku.globalCheck(rightBoard)) {
      console.log("The board was solved!");
    } else {
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
