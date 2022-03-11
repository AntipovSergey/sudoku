const checkRow = require('./utils/fixRow');

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  console.log('first changes');
  checkRow(boardString);
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

function makeTable(string) {
  const arr = [];
  for (let i = 0; i < string.length; i += 9) {
    arr.push(string.slice(i, (i + 9)).split(''));
  }
  return arr;
}

function isEmptySlot(table, value) {
  for (let i = value[0]; i < table[i].length; i += 1) {
    for (let j = value[1]; j < table[j].length; j += 1) {
      if (table[i][j] === '-') {
        return [i, j];
      }
    }
    return false;
  }
}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
  makeTable,
  isEmptySlot,
};
