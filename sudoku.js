const { row, column } = require('./hh');

function possibleVariants(indI, indJ, board) {
  const res = '123456789'.split('');
  const current = row(board, indI, indJ).concat(column(board, indI, indJ))
    .concat(solveBox(board, indI, indJ));
  return res.filter((el) => !current.includes(el));
}

function solveRecursive(board, variant, indI, indJ) {
  const bufBoard = board;
  bufBoard[indI][indJ] = variant;
  // console.log(variant);
  if (isSolved(board)) return true;

  for (let i = indI; i < board.length; i += 1) {
    let found = false;
    for (let j = 0; j < board[i].length; j += 1) {
      
      if (bufBoard[i][j] !== '-') continue;
      
      const variants = possibleVariants(i, j, bufBoard);
      
      if (!variants.length) {
        bufBoard[indI][indJ] = '-';
        return false;
      }
      
      for (let k = 0; k < variants.length; k += 1) {
        if (solveRecursive(bufBoard, variants[k], i, j)) {
          found = true;
          break;
        }
      }
      
      if (!found) {
        break;
      }
    }
    
    if (!found) {
      bufBoard[indI][indJ] = '-';
      return false;
    }

  }
  bufBoard[indI][indJ] = '-';
  return false;
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
  let i = 0;
  let j = 0;
  let found = false;
  for (i = 0; i < board.length; i += 1) {
    for (j = 0; j < board[i].length; j += 1) {
      if (board[i][j] === '-') {
        found = true;
        break;
      }
    }
    if (found) {
      break;
    }
  }

  const variants = possibleVariants(i, j, board);
  for (let k = 0; k < variants.length; k += 1) {
    if (solveRecursive(board, variants[k], i, j)) {
      break;
    }
  }

  return board;
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
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

  for (let i = boxRow; i < boxRow + boxSize; i += 1) {
    for (let j = boxCol; j < boxCol + boxSize; j += 1) {
      if ((i !== r || j !== c) && board[i][j] !== '-') {
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
	prettyBoard: prettyBoard,
};
