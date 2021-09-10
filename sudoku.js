// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

function boardToArray(sudokuString) {
  const arrayOfString = sudokuString.match(/.{9}/g);
  const nestedArrayOfString = arrayOfString.map((el) => el.split(""));
  const nestedArrayNumbers = nestedArrayOfString.map((el) =>
    el.map((element) =>
      element === "-" ? (element = "-") : (element = +element)
    )
  );
  return nestedArrayNumbers;
}

function solve(boardString) {}

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

function prettyBoard(nestedArrayNumbers) {
  let prettySudoku = "\n";
  for (let i = 0; i < nestedArrayNumbers.length; i++) {
    prettySudoku += `${nestedArrayNumbers[i].join("  ")}\n` + `\n`;
  }
  return prettySudoku;
}
console.log(prettyBoard(sudoku));

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};
