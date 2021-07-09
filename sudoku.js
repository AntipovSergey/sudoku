// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
const fs = require("fs");
const boardString = fs.readFileSync('./sudoku-puzzles.txt','utf-8');

function boardToArray(boardString, n) {
  const boardChanged = boardString.replace(/-/gmi, 0);
  const kek = boardChanged.match(/.{81}/gmi);
  const boardArr = kek[n].match(/(\d{9})/gmi);
  return boardArr.map((el) => el.split(''));
}

console.table(boardToArray(boardString, 0));
const array = boardToArray(boardString, 0);

function checkNum(array) {
  const rowcol = [];
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (array[row][col] == 0) {
        rowcol.push([row, col]);
      }
    }
  } return rowcol;
}
console.log(checkNum(array));

// function checkCube(row, col, value) {
//   row = Math.floor(row / 3) * 3;
//   col = Math.floor(col / 3) * 3;
//   let isFound = false;
//   for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//           if (grid[row + i][col + j] == value) isFound = true;
//       }
//   }
//   return isFound;

// function check(board, row, col, num) {
//   for (let i = 0; i < 10; i++) {
//       const rowCube = 3 * Math.floor(row / 3) + Math.floor(i / 3);
//       const colCube = 3 * Math.floor(col / 3) + i % 3;
//       if (board[row][i] == num || board[i][col] == num || board[rowCube][colCube] == num) {
//         return false;
//       }
//   }
//   return true;
// }


// // Returns a boolean indicating whether
// // or not the provided board is solved.
// // The input board will be in whatever
// // form `solve` returns.
// function isSolved(board) {

// }


// // Takes in a board in some form and
// // returns a String that's well formatted
// // for output to the screen.
// // The input board will be in whatever
// // form `solve` returns.
// function prettyBoard(board) {
  
// }

// // Exports all the functions to use them in another file.
// module.exports = {
// 	solve: solve,
// 	isSolved: isSolved,
// 	prettyBoard: prettyBoard
// }
