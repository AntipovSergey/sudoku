const {row, column} = require('./hh');

function possibleVariants(indI, indJ, board) {
  const res = '123456789'.split('');
}

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  const board = boardString.split('').reduce((acc, el, ind) => {
    const i = Math.trunc(ind / 9);
    if (acc[i] === undefined) acc[i] = [];
    acc[i].push(el);
    return acc;
  }, []);

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board.length; j += 1) {
      if (board[i][j] !== '-') continue;
      // const variants = possibleVariants();
    }
  }
  return board;
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  // let a = board.split(',');
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === '-') {
        return false;
      }
    }
  }
  return true;
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  return board.reduce((acc, el) => acc + el.join(' ') + '\n', '');
}

function solveBox(board, r, c) {
  const boxSize = 3;
  const res = [];
  const boxRow = Math.floor(r / boxSize) * boxSize;
  const boxCol = Math.floor(c / boxSize) * boxSize;

  for (let i = 0; i < boxRow + boxSize; i += 1) {
    for (let j = 0; j < boxCol + boxSize; i += 1) {
      if (i !== r && j !== c && board[i][j] !== '-') {
        res.push(board[i][j]);
      }
    }
  }
  return res;
}

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}

