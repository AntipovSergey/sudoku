const strToArr = require('./strtoarr');
const isInHorisontal = require('./isInHorisontal');
const isInVertical = require('./isInVertical');
const isInBlock = require('./isInBlock');
const { isArray } = require('util');

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  // const board = strToArr(boardString);
  const board = strToArr('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--');
  const checkArr = [];
  prettyBoard(board);
  let counter = 0;

  function step(board) {
    if (isSolved(board)) return board;

    for (let y = 0; y < board.length; y++) {
      for (let x = 0; x < board.length; x++) {
        if (board[y][x] === '-') {
          for (let i = 1; i <= 9; i++) {
            if (
              isInHorisontal(i.toString(), y, x, board) &&
              isInVertical(i.toString(), y, x, board) &&
              isInBlock(i.toString(), y, x, board)
            ) {
              checkArr.push(i);
            }
          }
          if (checkArr.length === 1) {
            board[y][x] = checkArr[0]; // later: toString();
            checkArr.length = 0;
          }
        }
        checkArr.length = 0;
      }
    }
    prettyBoard(board);
    counter++;
  }
  console.log(step(board));
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  let count = 0;
  board.forEach((row) =>
    row.forEach((element) => {
      if (element == '-') {
        count += 1;
      }
    })
  );
  return count === 0;
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  //console.clear()
  console.log('---------------------');
  board.forEach((line) => console.log('| ' + line.join(' ') + ' |'));
  console.log('---------------------');
}

solve();

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};
