// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  const size = 9;
  const boxSize = 3;
  const arr = [];
  let count = 0;
  for (let i = 0; i < 9; i++) {
    arr[i] = [];
    for (let j = 0; j < 9; j++) {
      arr[i][j] = boardString[count];
      count++;
    }
  }
  console.log('first changes');

  const findEmpty = (arr) => { // Поиск пустых элементов
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (arr[r][c] === '-') {
          return [r, c];
        }
      }
    }
    return null;
  };
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
