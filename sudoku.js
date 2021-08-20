// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function boardToArray(string) {
  let arr = string.match(/.{9}/g);
  nestedArr = arr.map((el) => el.split(''));
  nestedArrNum = nestedArr.map((i) =>
    i.map((el) => (el === '-' ? (el = null) : (el = +el)))
  );
  return nestedArrNum;
}

function solve(boardString) {
  let boardArray = boardToArray(boardString);
  function solution(boardArray) {}
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
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};
console.log(
  boardToArray(
    '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
  )
);
