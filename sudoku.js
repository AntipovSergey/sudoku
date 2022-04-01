// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  //get sizes of Sudoku
  const size = 9;
  const boxSize = 3;

  /* finding empty cell in our board
findEmptyCell is required function
 variable 'r' is row
 variable 'c' is column
*/

  /* checking whether number is valid in current cell
  function isNumAcceptableInCell (num, pos, board)*/

  // in validate we check row, column and boxes

  // check row
  // index 'i' is for row

  //check columns
  // index 'i' is for columns

  //check boxes
  // index 'i' is for columns

  // recursive method for sudoku
  // variable 'x' is for rows
  // variable 'y' is for columns
  const solve = () => {
    const currPos = findEmpty(board);

    if (currPos === null) {
      return true;
    }

    for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPos, board);

      if (isValid) {
        const [x, y] = currPos;
        board[x][y] = currNum;

        if (solve()) {
          return true;
        }
        board[x][y] = ".";
      }
    }

    return false;
  };
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
function prettyBoard(board) {}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
