// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  const size = 9;
  const boxsize = 3;
  const arrBoard = [...boardString.split('\n')].map((e) => e.split(''));
  console.table(arrBoard);
  const findEmptyPosition = (arrBoard) => {
    for (let i = 0; i < arrBoard.length; i += 1) {
      for (let j = 0; j < arrBoard.length; j += 1) {
        if (arr[i][j] === '-') {
          return [i, j];
        }
      }
    }
    return null;
  };

  // return arrBoard
}

solve(prettyBoard('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'));
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
  for (let i = 0; i <= board.length; i += 1) {
    if (i % 9 === 0) {
      result += `${board.slice(i - 9, i)}\n`;
    }
  }
  return result.trim();
}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
