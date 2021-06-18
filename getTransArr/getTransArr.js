const fs = require('fs');
const sudokuPuzzles = fs.readFileSync('../sudoku-puzzles.txt', 'utf-8');

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  let board = []; 
  let newStr = boardString.replace(/\-/g, 0);
  while (newStr.length) {
    board.push(Array.from(newStr.substring(0, 9)));
    newStr = newStr.substring(9);
  }
  return board;
}
//Проверка:
// let str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
// console.table(solve(str));
// let firstPuzzle = sudokuPuzzles.split('\n')[0];
// console.table(solboard


// // Returns a boolean indicating whether
// // or not the provided board is solved.
// // The input board will be in whatever
// // form `solve` returns.
function isSolved(board) {

}


// // Takes in a board in some form and
// // returns a String that's well formatted
// // for output to the screen.
// // The input board will be in whatever
// // form `solve` returns.
function prettyBoard(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '0') {
        board[i][j] = Math.floor(Math.random() * 9) + 1;
      } else {
        board[i][j] = +board[i][j];
      }
    }
  } 
  return board;
}
//Проверка: 
// let firstPuzzle = sudokuPuzzles.split('\n')[0];
// console.table(prettyBoard(solve(firstPuzzle)));



// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}

