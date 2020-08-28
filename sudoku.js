// Branch from Nikita

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
// eslint-disable-next-line no-unused-vars
function solve(boardString) {

}



// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  const rowCheck = () => {
    for (const array of board) {
      const str = array.join('');
      if (new Set(str).size !== str.length) {
        return false;
      }
      return true;
    }
  };
  rowCheck();
}

console.log((isSolved([[1, 2, 3, 4], [1, 2, 3, 1], [1, 2, 3, 4]])));

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
// eslint-disable-next-line no-unused-vars
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
