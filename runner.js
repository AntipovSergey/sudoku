// Use filesystem.
const fs = require('fs');
// Use functions from sudoku.js file.
const sudoku = require('./sudoku.js');
// const sudoku = require('./sudoku-puzzles');

// The sudoku puzzles that your program will solve can be found
// in the sudoku-puzzles.txt file.
//
// Remember, the file has newline characters at the end of each line,
// so you should remove them.

// Gets one puzzle from the text file.
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

  let solvedPuzzle = sudoku.solve(puzzle); //тут обращаемся к нашей функции solve внутри объекта и кладем в нее пазлы
  if (sudoku.isSolved(solvedPuzzle)) { //тут обращаемся к isSolved внутри объекта и проверяем его на на тру или фолз
    console.log("The board was solved!");
    console.log(sudoku.prettyBoard(solvedPuzzle)); // тут мы превращаем это в доску судоку
  }
  else {
    console.log("The board wasn't solved :("); //если не решено
  }
}

// Reads file and sends data from it to the readAndSolve function.
fs.readFile(
  './sudoku-puzzles.txt',
  'utf-8',
  readAndSolve
);

