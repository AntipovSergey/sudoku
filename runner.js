// Use filesystem.
const fs = require('fs');
// Use functions from sudoku.js file.
const sudoku = require('./sudoku');
//const { solve } = require('./sudoku');

// The sudoku puzzles that your program will solve can be found
// in the sudoku-puzzles.txt file.
//
// Remember, the file has newline characters at the end of each line,
// so you should remove them.

// Gets one puzzle from the text file.
function sudokuParse(content, puzzleNumber = 0) {
  let puzzle = content.split('\n')[puzzleNumber];
  let arrayString = (
    puzzle.slice(0, 9) +' '+ puzzle.slice(9,18) + ' ' + puzzle.slice(18,27) + ' ' + 
    puzzle.slice(27,36) + ' ' + puzzle.slice(36,45) + ' ' + puzzle.slice(45,54) + ' ' + 
    puzzle.slice(54,63) + ' ' + puzzle.slice(63,72) + ' ' + puzzle.slice(72,81)
  ).split(' ');
  let inputBoard = arrayString.map((el) => el.split(''))
  console.log(inputBoard);
  return inputBoard;
}

function readAndSolve(err, data) {
  if (err) {
    throw err;
  }
  let puzzle = sudokuParse(data);

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
fs.readFile(
  './sudoku-puzzles.txt',
  'utf-8',
  readAndSolve
);

// module.exports = {
//   sudokuParse
// };
