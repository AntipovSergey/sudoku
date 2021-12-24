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
  console.log(arrArrey(puzzle));
  
  return puzzle;
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
  

  console.log('============================================> \n',sudoku);
}

function arrArrey(string) {
  const res = [1,2,3,4,5,6,7,8,9].map((el,i)=>{
    return string.slice(i*9,(i+1)*9).split('');
  });
  return res;
}

// function search(index) {

// }

// Reads file and sends data from it to the readAndSolve function.
 fs.readFile(
  './sudoku-puzzles.txt',
  'utf-8',
  readAndSolve
);

