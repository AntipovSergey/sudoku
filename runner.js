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
function sudokuParse(content, puzzleNumber = 5) {
  const puzzle = content.split('\n')[puzzleNumber];
  return puzzle;
}

function readAndSolve(err, data) {
  if (err) {
    throw err;
  }
  const puzzle = sudokuParse(data);
  const arr = sudoku.f0(puzzle);
  // console.table(arr);
  // const arr1 = sudoku.f2(0, 1, arr);
  // console.log(sudoku.f3(0, 1, arr));
  // console.log(sudoku.f4(arr1, [3, 4, 6, 7, 8]));
  // console.table(sudoku.f1(arr));
  // console.log(sudoku.f5(arr));

  const solvedPuzzle = sudoku.solve(puzzle);
  console.table(solvedPuzzle);
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

module.exports = {
  sudokuParse,
};
