function boardStringToArray(string) {
  let result = [];

  for (let i = 0; i < string.length; i += 9) {
    result.push(string.slice(i, i + 9).split(''));
  }

  let res = result.map(el => el.map(element => {
    if (element === '-') {
      return 0;
    } else {
      return +element;
    }
  }));

  return res;
}

function nextEmptySpot(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        return [i, j];
      }
    }
  }

  return [-1, -1];
}
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

}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
