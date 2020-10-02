// Use filesystem.
const fs = require('fs');
// Use prompt.
const prompt = require('prompt-sync')();
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

function readAndSolve(err, data, puzzleNumber) {
  if (err) {
    throw err;
  }

  let puzzle = sudokuParse(data, puzzleNumber);
  puzzle = solve.transform(puzzle);

  let solvedPuzzle = sudoku.solve(puzzle);
  if (sudoku.isSolved(solvedPuzzle)) {
    console.log("The board was solved!");
    console.log(sudoku.prettyBoard(solvedPuzzle));
  }
  else {
    console.log("The board wasn't solved :(");
  }
}

function runGame(err, data) {
  const puzzleNumber = parseInt(prompt('Введите номер паззла: '));
  return readAndSolve(err, data, puzzleNumber)
}

// Reads file and sends data from it to the readAndSolve function.
fs.readFile(
  './sudoku-puzzles.txt',
  'utf-8',
  runGame
);

