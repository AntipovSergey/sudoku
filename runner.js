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
  let puzzle = content.split('\n')[puzzleNumber].split('');
  let arrayOfArrays = []
  let num = 9;
  for (let i = 0; i < content.length; i += 9) {
    arrayOfArrays.push(puzzle.slice(i, num));
    num = num + i
  } return arrayOfArrays;
  // console.log(puzzle);
  // return puzzle;
}

let checkResult = sudokuParse()

function check(checkResult) {
  for (let i = 0; i < checkResult.length; i++) {
    for (let j = 0; j < checkResult.length; j++) {
      if (checkResult === '-') {
        for (let k = 1; k <= 9; k++) {
          if (!checkResult[i].includes(k)) {
            checkResult[i][j] = k;
          } continue;
        }
      }
    }
  } return checkResult
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

