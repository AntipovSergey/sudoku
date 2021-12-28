// Use filesystem.
const fs = require('fs');
// Use functions from sudoku.js file.
const sudoku = require('./sudoku');

// Судоку, которые решает ваша программа, можно найти
// в файле sudoku-puzzles.txt.
//
// Помните, что в конце каждой строки файла есть символы новой строки,
// так что вы должны их удалить.

// Получает одну головоломку из текстового файла.
function sudokuParse(content, puzzleNumber = 0) {
  const puzzle = content.split('\n')[puzzleNumber];
  console.log(puzzle);
  return puzzle;
}

function readAndSolve(err, data) {
  if (err) {
    throw err;
  }
  const puzzle = sudokuParse(data);
  const arr = sudoku.f0(puzzle);
  console.log(sudoku.f2(0, 1, arr));

  const solvedPuzzle = sudoku.solve(puzzle);
  if (sudoku.isSolved(solvedPuzzle)) {
    console.log('The board was solved!');
    console.log(sudoku.prettyBoard(solvedPuzzle));
  } else {
    console.log("The board wasn't solved :(");
  }
}

// Reads file and sends data from it to the readAndSolve function.
fs.readFile(
  './sudoku-puzzles.txt',
  'utf-8',
  readAndSolve,
);
