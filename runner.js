// Use filesystem.
const fs = require('fs');
// Use functions from sudoku.js file.
fs.readFile('./sudoku-puzzles.txt','utf-8');
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



// Reads file and sends data from it to the readAndSolve function.

