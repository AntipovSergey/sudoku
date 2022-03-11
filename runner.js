// Подключаем модуль fs.
const fs = require('fs');
// Выгружаем функции изи файла sudoku.js
const sudoku = require('./sudoku');

// Выгружаем из файла sudoku-puzzles.txt первый судоку для решения.
function sudokuParse(content, puzzleNumber = 0) {
  const puzzle = content.split('\n')[puzzleNumber];
  console.log(puzzle);
  // console.log('parser');
  return puzzle;
}

// решаем судоку (получаем данные запускаем программу решения).
function readAndSolve(err, data) {
  if (err) {
    throw err;
  }
  const puzzle = sudokuParse(data);

  const solvedPuzzle = sudoku.solve(puzzle);
  if (sudoku.isSolved(solvedPuzzle)) {
    console.log('Победа!');
    console.log(sudoku.prettyBoard(solvedPuzzle));
  } else {
    console.log('Судоку не  решён :(');
  }
}

// Reads file and sends data from it to the readAndSolve function.

fs.readFile(
  './sudoku-puzzles.txt',
  'utf-8',
  readAndSolve,
);
