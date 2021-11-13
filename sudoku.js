const board =
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {}

function horizontalSolver(board) {
  for (let i = 0; i < board.length; i += 1) {
    const availableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let j = 0; j < board[i].length; j += 1) {
      if (board[i][j] !== '-') {
        const numberToDelIndex = availableNumbers.indexOf(Number(board[i][j]));
        availableNumbers.splice(numberToDelIndex, 1);
      }
    }
    for (let k = 0; k < board[i].length; k += 1) {
      if (board[i][k] === '-') {
        board[i] = board[i].split('');
        board[i][k] = availableNumbers[0];
        board[i] = board[i].join('');
        availableNumbers.splice(0, 1);
      }
    }
  }
  return board;
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  const result = board.split('').join(' ');
  for (let i = 0; i < result.length; i += 18) {
    console.log(result.slice(i, i + 18));
  }
}

function boardToArray(board) {
  const newBoard = [];
  for (let i = 0; i < board.length; i += 9) {
    newBoard.push(board.slice(i, i + 9));
  }
  return newBoard;
}

const arrBoard = boardToArray(board);
const solveHorizontal = horizontalSolver(arrBoard);

console.log(prettyBoard(solveHorizontal.join().replaceAll(',', '')));

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};
