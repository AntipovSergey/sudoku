// Use filesystem.
const fs = require('fs');
// Use functions from sudoku.js file.
const sudokuBoards = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');

function sudokuParse(content, puzzleNumber = 0) {
  let puzzle = content.split('\n')[puzzleNumber];
  return puzzle;
}

let puzzle = sudokuParse(sudokuBoards);

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  let board = [];
  let boardRow = [];

  for (let i = 0; i < boardString.length; i++) {
    boardRow.push(boardString[i]);
    if (boardRow.length === 9) {
      board.push(boardRow);
      boardRow = [];
    }
  }

  return board;
}

let newBoard = solve(puzzle);

function check(checkResult) {
  for (let i = 0; i < checkResult.length; i++) {
    for (let j = 0; j < checkResult[i].length; j++) {
      if (checkResult[i][j] === '-') {

        for (let k = 1; k <= 9; k++) {
          if (checkVer(checkResult, j, k) && checkHor(checkResult, i, k) && checkQuad(checkResult, i, j, k)) {
            checkResult[i][j] = `${k}`;
          } continue;
        }
      }
    }
  } return checkResult.map((el) => el.map((item) => item).join('')).join('\n');
}

function checkVer(arr, j, k) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i][j] === `${k}`) return false;
  }

  return true;
}

function checkHor(arr, i, k) {
  for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === `${k}`) return false;
    }

  return true;
}

console.log(check(newBoard));

function checkQuad(arr, i, j, k) {

  for (let z = 0; z < 9; z++) {
    const a = 3 * Math.floor(i / 3) + Math.floor(z / 3);
    const b = 3 * Math.floor(j / 3) + z % 3;
    if (arr[a][b] === `${k}`) return false;
  }

  return true;
}


// console.log(getQuads(newBoard));

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  
}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
