// Use filesystem.
const fs = require('fs');
// Use functions from sudoku.js file.
// const sudoku = require('./sudoku');
const content = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');

// The sudoku puzzles that your program will solve can be found
// in the sudoku-puzzles.txt file.
//
// Remember, the file has newline characters at the end of each line,
// so you should remove them.

// Gets one puzzle from the text file.
function sudokuParse(cont, puzzleNumber = 0) {
  const puzzle = cont.replaceAll('-', '0').split('\n')[puzzleNumber].split('');
  const tempArray = [];
  let num = 9;
  for (let i = 0; i < 81; i += 9) {
    tempArray.push(puzzle.slice(i, num));
    num += 9;
  }
  for (let i = 0; i < tempArray.length; i++) {
    for (let j = 0; j < tempArray.length; j++) {
      tempArray[i][j] = Number(tempArray[i][j]);
    }
  }
  return tempArray;
}

//const board = sudokuParse(content, 1);
//console.table(board);
/*
function readAndSolve(err, data) {
  if (err) {
    throw err;
  }
  const puzzle = sudokuParse(data);

  const solvedPuzzle = sudoku.solve(puzzle);
  if (sudoku.isSolved(solvedPuzzle)) {
    console.log('The board was solved!');
    console.log(sudoku.prettyBoard(solvedPuzzle));
  }
  else {
    console.log("The board wasn't solved :(");
  }
}
*/
// Reads file and sends data from it to the readAndSolve function.
/*
fs.readFile(
  './sudoku-puzzles.txt',
  'utf-8',
  readAndSolve
);
*/
module.exports = sudokuParse;
