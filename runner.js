// Use filesystem.
const fs = require('fs');
// Use functions from sudoku.js file.
const sudoku = require('./sudoku');

// The sudoku puzzles that your program will solve can be found
// in the sudoku-puzzles.txt file.
//
// Remember, the file has newline characters at the end of each line,
// so you should remove them.

// Возвращает строку судоку которую нужно решить
function sudokuParse(content, puzzleNumber = 5) {
  const puzzle = content.split('\n')[puzzleNumber];
  console.log(puzzle);
  return puzzle;
}

function readAndSolve(err, data) {
  if (err) {
    throw err;
  }
  const puzzle = sudokuParse(data);

  const solvedPuzzle = sudoku.solve(puzzle); // Запуск функции solve из файла sudoku,в качестве аргумента которой передается неформатированная строка полученная из функции sudokuParse! Результат данной функции далжна быть строка в неформатьрованном виде(функция PrettyBoard из sudoku.js) которая передается дальше для проверки!
  console.table(solvedPuzzle)
  if (sudoku.isSolved(solvedPuzzle)) {
    console.log('The board was solved!');
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
