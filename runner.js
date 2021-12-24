// Use filesystem.
const fs = require('fs');
const { f2 } = require('./sudoku');
// Use functions from sudoku.js file.
const sudoku = require('./sudoku');

// Судоку, которые решает ваша программа, можно найти
// в файле sudoku-puzzles.txt.
//
// Помните, что в конце каждой строки файла есть символы новой строки,
// так что вы должны их удалить.

// Получает одну головоломку из текстового файла.
function sudokuParse(content, puzzleNumber = 0) {
  let puzzle = content.split('\n')[puzzleNumber];
  console.log(puzzle);
  return puzzle;
}

function readAndSolve(err, data) {

  if (err) {
    throw err;
  }
  let puzzle = sudokuParse(data);
  let a = sudoku.f0(puzzle)
  sudoku.f3(1, 7, a)


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



