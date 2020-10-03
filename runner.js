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
  const puzzle = content.split('\n')[puzzleNumber];
  return puzzle;
}

function readAndSolve(err, data, puzzleNumber) {
  if (err) {
    throw err;
  }

  let puzzle = sudokuParse(data, puzzleNumber);
  puzzle = sudoku.transform(puzzle);

  const solvedTable = sudoku.solve(puzzle);

  if (solvedTable) {
    console.log(solvedTable);
  }
  else {
    console.log('Во мне нет такого файла =(')
  }
}



function runGame(err, data) {
  const puzzleNumber = parseInt(prompt('Введите номер паззла (от 1 до 15): '));
  return readAndSolve(err, data, puzzleNumber - 1);
}

// Reads file and sends data from it to the readAndSolve function.
fs.readFile(
  './sudoku-puzzles.txt',
  'utf-8',
  runGame
);

