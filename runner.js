// Подключаем модуль fs.
const fs = require('fs');
// Выгружаем функции изи файла sudoku.js
const sudoku = require('./sudoku');

// Выгружаем из файла sudoku-puzzles.txt первый судоку для решения.
function sudokuParse(content, puzzleNumber = 0) {
  let puzzle = content.split('\n')[puzzleNumber];
  console.log(puzzle);
  //console.log('parser');
  return puzzle;
}

// решаем судоку (получаем данные запускаем программу решения).
function readAndSolve(err, data) {
  if (err) {
    throw err;
  }
  let puzzle = sudokuParse(data);

  let solvedPuzzle = sudoku.solve(puzzle);
  if (sudoku.isSolved(solvedPuzzle)) {
    console.log("Победа!");
    console.log(sudoku.prettyBoard(solvedPuzzle));
  }
  else {
    console.log("Судоку не  решён :(");
  }
}

// Читаем файл sudoku-puzzles.txt и выгружаем данные для функции readAndSolve.
fs.readFile(
  './sudoku-puzzles.txt',
  'utf-8',
  readAndSolve
);
