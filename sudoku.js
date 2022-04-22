const arrRevers = [...arr1];

function revers(boardString) {
  for (let i = 0; i < boardString.length; i++) {
    for (let j = i + 1; j < boardString.length; j++) {
      const arr2 = boardString[i][j];
      boardString[i][j] = boardString[j][i];
      boardString[j][i] = arr2;
    }
  }
  return boardString;
}
console.log(revers(arrRevers));

// Takes a board as a string in the format
// you see in the boardString file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(bboardString) {
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

