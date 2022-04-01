const { strToArr } = require('./strToArr')

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  console.log('first changes');

}

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
  let result = '';
  for (let index = 0; index < board.length; index++) {
    for (let i = 0; i < 3; i++) {
      result += board[index][i] + ' ';
    }
    result += ' ';
    for (let i = 3; i < 6; i++) {
      result += board[index][i] + ' ';
    }
    result += ' ';
    for (let i = 6; i < 9; i++) {
      result += board[index][i] + ' ';
    }
    result += `\n`;
    if(index === 2) {
      result += `\n`;
    } else if(index === 5){
      result += `\n`;
    }
  }
    return result;
}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
