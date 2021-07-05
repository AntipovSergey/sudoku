// Use filesystem.
const fs = require('fs');
// Use functions from sudoku.js file.
const sudoku = require('./sudoku');
// Reads file and sends data from it to the readAndSolve function.
let content = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8', readAndSolve);

// The sudoku puzzles that your program will solve can be found
// in the sudoku-puzzles.txt file.
//
// Remember, the file has newline characters at the end of each line,
// so you should remove them.

// Gets one puzzle from the text file.
function sudokuParse(content, puzzleNumber = 0) {
  let puzzle = content.split('\n')[puzzleNumber].split('');

  let tempArray = [];
  let num = 9;

  for (let i = 0; i < 81; i += 9) {
    tempArray.push(puzzle.slice(i, num));
    num += 9;
  }

  return tempArray;
}

console.log(sudokuParse(content));

function readAndSolve(err, data) {
  if (err) {
    throw err;
  }
  let puzzle = sudokuParse(data);

  let solvedPuzzle = sudoku.solve(puzzle);
  if (sudoku.isSolved(solvedPuzzle)) {
    console.log('The board was solved!');
    console.log(sudoku.prettyBoard(solvedPuzzle));
  } else {
    console.log("The board wasn't solved :(");
  }
}
