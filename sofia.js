// const fs = require('fs');

// function sudokuParse(content, puzzleNumber = 0) {
//   let puzzle = content.split('\n')[puzzleNumber];
//   console.log(puzzle);
//   return puzzle;
// }

// function readAndSolve(data) {
//   let puzzle = sudokuParse(data);

//   let solvedPuzzle = solve(puzzle);
//   if (isSolved(solvedPuzzle)) {
//     console.log('The board was solved!');
//     console.log();
//   } else {
//     console.log("The board wasn't solved :(");
//   }
// }

// fs.readFile('./sudoku-puzzles.txt', 'utf-8', readAndSolve);

/* 
function prettyBoard(puzzle) {
  let array = [
    [1, '', 5, 8, '', 2, '', '', ''],
    ['', 9, '', '', 7, 6, 4, '', 5],
    [2, '', '', 4, '', '', 8, 1, 9],
    ['', 1, 9, '', '', 7, 3, '', 6],
    [7, 6, 2, '', 8, 3, '', 9, ''],
    ['', '', '', '', 6, 1, '', 5, ''],
    ['', '', 7, 6, '', '', '', 3, ''],
    [4, 3, '', '', 2, '', 5, '', 1],
    [6, '', '', 3, '', 8, 9, '', ''],
  ];
  return array;
}

function solveRow(array) {
  array = [
    [1, '123', 5, 8, '123', 2, '123', '123', '123'],
    ['123', 9, '123', '123', 7, 6, 4, '123', 5],
    [2, '123', '123', 4, '123', '123', 8, 1, 9],
    ['123', 1, 9, '123', '123', 7, 3, '123', 6],
    [7, 6, 2, '123', 8, 3, '123', 9, '123'],
    ['123', '123', '123', '123', 6, 1, '123', 5, '123'],
    ['123', '123', 7, 6, '123', '123', '123', 3, '123'],
    [4, 3, '123', '123', 2, '123', 5, '123', 1],
    [6, '123', '123', 3, '123', 8, 9, '123', '123'],
  ];
  return array;
}

function solveColumn(array) {
  // array = [
  //   [1, '4', 5, 8, '52', 2, '32', '1', '8'],
  //   ['8', 9, '74', '24', 7, 6, 4, '36', 5],
  //   [2, '1', '14', 4, '52', '4', 8, 1, 9],
  //   ['4', 1, 9, '42', '42', 7, 3, '42', 6],
  //   [7, 6, 2, '42', 8, 3, '42', 9, '42'],
  //   ['42', '42', '42', '42', 6, 1, '42', 5, '42'],
  //   ['42', '42', 7, 6, '42', '42', '42', 3, '42'],
  //   [4, 3, '42', '42', 2, '42', 5, '42', 1],
  //   [6, '42', '42', 3, '42', 8, 9, '42', '42'],
  // ]; */

array = [
  [1, 4, 5, 8, 9, 2, 6, 7, 3],
  [8, 9, 3, 1, 7, 6, 4, 2, 5],
  [2, 7, 6, 4, 3, 5, 8, 1, 9],
  [5, 1, 9, 2, 4, 7, 3, 8, 6],
  [7, 6, 2, 5, 8, 3, 1, 9, 4],
  [3, 8, 4, 9, 6, 1, 7, 5, 2],
  [9, 5, 7, 6, 1, 4, 2, 3, 8],
  [4, 3, 8, 7, 2, 9, 5, 6, 1],
  [6, 2, 1, 3, 5, 8, 9, 4, 7],
];

function isSolved(board) {
  let sum = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      sum[i] += board[i][j];
    }
  }
  for (i = 0; i < 9; i++) {
    if (sum[i] != 45) return false;
  }
  return true;
}

console.log(isSolved(array));

/* 
function solve(puzzle) {
  let checker = false;
  puzzle = prettyBoard(puzzle);
  while (checker !== true) {
    puzzle = solveRow(puzzle);
    puzzle = solveColumn(puzzle);
    checker = isSolved(puzzle);
  }
  let prettyPuzzle = '';
  for (i = 0; i < 9; i++) {
    prettyPuzzle = prettyPuzzle + `${i}:`;
    for (let j = 0; j < 9; j++) {
      prettyPuzzle += '|' + puzzle[i][j] + '|';
    }
    prettyPuzzle += '\n ----------------------------\n';
  }

  return prettyPuzzle;
}

let puzzle;

console.log(solve(puzzle));

// module.exports = {
//   solve: solve,
//   isSolved: isSolved,
//   prettyBoard: prettyBoard,
// };
 */
