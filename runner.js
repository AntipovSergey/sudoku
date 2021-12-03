// Use filesystem.
const fs = require('fs');
// Use functions from sudoku.js file.
const sudoku = require('./sudoku');

// The sudoku puzzles that your program will solve can be found
// in the sudoku-puzzles.txt file.
//
// Remember, the file has newline characters at the end of each line,
// so you should remove them.
// Помните, что в конце каждой строки файла есть символы новой строки, поэтому их следует удалить.

// Gets one puzzle from the text file. 
// Получает одну головоломку из текстового файла.
function sudokuParse(content, puzzleNumber = 0) {
  let puzzle = content.split('\n')[puzzleNumber];
  let puzzleArray = puzzle.split('').map((el => el.replace(/-/g, '.')));
  const newMass = []

  while(puzzleArray.length > 0) {
    newMass.push(puzzleArray.splice(0, 9))
  }

  return newMass
}


function readAndSolve(err, data) {
  if (err) {
    throw err;
  }
  let puzzle = sudokuParse(data, 14);
  let puzzleCpy = puzzle.slice()
  console.table(puzzleCpy)
  let solvedPuzzle = sudoku.solve(puzzle);
  console.table(solvedPuzzle)
  // if (sudoku.isSolved(solvedPuzzle)) {
  //   console.log("The board was solved!");
  //   console.log(sudoku.prettyBoard(solvedPuzzle));
  // }
  // else {
  //   console.log("The board wasn't solved :(");
  // }
}

// Reads file and sends data from it to the readAndSolve function. 
// Читает файл и отправляет данные из него в функцию readAndSolve.
fs.readFile(
  './sudoku-puzzles.txt',
  'utf-8',
  readAndSolve
);

