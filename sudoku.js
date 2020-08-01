// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
// function solve(boardString) {
//   const prettySudoku = prettyBoard(boardString);
//   const result = runThrough(prettySudoku);
//   if (isSolved(result)) {
//     return result;
//   }
//   return `Решить не удалось`;
// }

// Use filesystem.
const fs = require('fs');
// Use functions from sudoku.js file.
// const sudoku = require('./sudoku');

// The sudoku puzzles that your program will solve can be found
// in the sudoku-puzzles.txt file.
//
// Remember, the file has newline characters at the end of each line,
// so you should remove them.

// Gets one puzzle from the text file.
function sudokuParse(content, puzzleNumber = 13) {
  let puzzle = content.split('\n')[puzzleNumber];
  console.log(puzzle);
  console.log(typeof puzzle);
  return puzzle;
}

function readAndSolve(err, data) {
  if (err) {
    throw err;
  }
  let puzzle = sudokuParse(data);
  const formattedPuzzle = prettyBoard(puzzle);
  let solvedPuzzle = runThrough(formattedPuzzle);
  if (isSolved(solvedPuzzle)) {
    console.log('The board was solved!');
    console.table(solvedPuzzle);
  } else {
    console.log("The board wasn't solved :(");
  }
}

// Reads file and sends data from it to the readAndSolve function.
fs.readFile('./sudoku-puzzles.txt', 'utf-8', readAndSolve);

//

function runThrough(board) {
  if (board[8].reduce((a, c) => a + c) === 45) {
    return board;
  }
  for (let line = 0; line < board.length; line++) {
    for (let cell = 0; cell < board[line].length; cell++) {
      const copy = JSON.parse(JSON.stringify(board));
      if (board[line][cell] === 0) {
        for (let number = 1; number < 10; number++) {
          if (
            !isHorizontal(number, board[line]) &&
            !isVertical(
              number,
              transpondToColumn(board),
              transpondToColumn(board)[cell]
            ) &&
            !isSquare(number, line, cell, board, indexes)
          ) {
            copy[line][cell] = number;
            const newBoard = runThrough(copy);
            if (newBoard) {
              return newBoard;
            }
          }
        }
        return undefined;
      }
    }
  }
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  let sum = 0;
  for (let index = 0; index < board.length; index++) {
    sum += board[index].reduce((a, c) => a + c);
  }
  if (sum === 405) {
    return true;
  }
  return false;
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  let string = board;
  let result = [];
  for (let index = 0; index < 9; index++) {
    result.push(Array.from(string.substring(0, 9)));
    string = string.substring(9);
  }
  for (let index = 0; index < result.length; index++) {
    const element = result[index];
    for (let jindex = 0; jindex < element.length; jindex++) {
      const cell = element[jindex];
      if (cell === '-') {
        element[jindex] = 0;
      } else {
        element[jindex] = +element[jindex];
      }
    }
  }
  return result;
}

// Exports all the functions to use them in another file.
// module.exports = {
//   solve: solve,
//   isSolved: isSolved,
//   prettyBoard: prettyBoard,
// };

function isHorizontal(num, line) {
  for (let index = 0; index < line.length; index++) {
    const element = line[index];
    if (element === num) return true;
  }
  return false;
}

function isVertical(num, board, column) {
  for (let index = 0; index < board.length; index++) {
    if (num === column[index]) return true;
  }
  return false;
}

const pretty = prettyBoard(
  '--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3'
);

const transpondToColumn = (m) => m[0].map((x, i) => m.map((x) => x[i]));

// console.log(pretty);
// console.table(transpose(pretty));

// console.table(oneDimensionSearchForOneEmpty(transpose(pretty), false));
// function isAlreadyInOtherDimensions(number, line) {
//   return transponse(line).includes(number);
// }

const table = [
  [1, 2, 2, 4],
  [5, 6, 7, 4],
];

// console.table(transpondToColumn(table));
const indexes = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  [
    [0, 3],
    [0, 4],
    [0, 5],
    [1, 3],
    [1, 4],
    [1, 5],
    [2, 3],
    [2, 4],
    [2, 5],
  ],
  [
    [0, 6],
    [0, 7],
    [0, 8],
    [1, 6],
    [1, 7],
    [1, 8],
    [2, 6],
    [2, 7],
    [2, 8],
  ],
  [
    [3, 0],
    [3, 1],
    [3, 2],
    [4, 0],
    [4, 1],
    [4, 2],
    [5, 0],
    [5, 1],
    [5, 2],
  ],
  [
    [3, 3],
    [3, 4],
    [3, 5],
    [4, 3],
    [4, 4],
    [4, 5],
    [5, 3],
    [5, 4],
    [5, 5],
  ],
  [
    [3, 6],
    [3, 7],
    [3, 8],
    [4, 6],
    [4, 7],
    [4, 8],
    [5, 6],
    [5, 7],
    [5, 8],
  ],
  [
    [6, 0],
    [6, 1],
    [6, 2],
    [7, 0],
    [7, 1],
    [7, 2],
    [8, 0],
    [8, 1],
    [8, 2],
  ],
  [
    [6, 3],
    [6, 4],
    [6, 5],
    [7, 3],
    [7, 4],
    [7, 5],
    [8, 3],
    [8, 4],
    [8, 5],
  ],
  [
    [6, 6],
    [6, 7],
    [6, 8],
    [7, 6],
    [7, 7],
    [7, 8],
    [8, 6],
    [8, 7],
    [8, 8],
  ],
];

function isSquare(num, line, cell, board, indexes) {
  const currentCoord = [line, cell];
  for (let index = 0; index < indexes.length; index++) {
    for (let cells = 0; cells < indexes[index].length; cells++) {
      // for (let item = 0; item < indexes[index][cells].length; item++) {
      const cursqr = indexes[index][cells];
      if (
        indexes[index][cells][0] === currentCoord[0] &&
        cursqr[1] === currentCoord[1]
      ) {
        const ourSqaure = indexes[index];
        const squareOfNumbers = ourSqaure.map((elem) => {
          return board[elem[0]][elem[1]];
        });
        for (let i = 0; i < squareOfNumbers.length; i++) {
          const numberInSquare = squareOfNumbers[i];
          if (squareOfNumbers[i] === num) {
            return true;
          }
        }
        return false;
      }
    }
  }
}

const sudokustring =
  '----------------------------------------------------------------------------------';
// console.log(sudokustring);
// console.log(prettyBoard);
// console.table(sudoku);
// console.table(runThrough(prettyBoard(sudokustring)));
