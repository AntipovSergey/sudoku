// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
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
function prettyBoard(board) {}

function arraytoString(sudoku) {
  let result = [];
  let arr1 = sudoku.split('');
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    arr.push(arr1[i]);
    if ((i + 1) % 9 === 0) {
      result.push(arr);
      arr = [];
    }
  }
  return result;
}

let array = arraytoString(
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89---'
);

console.log(array);

function checkRow(array, number, y) {
  for (let x = 0; x < array.length; x++) {
    if (array[y][x] === number) return false;
  }
  return true;
}

console.log(checkRow(array, '8', 1));

function checkColumn(array, number, x) {
  for (let y = 0; y < array.length; y++) {
    if (array[y][x] === number) return false;
  }
  return true;
}

console.log(checkColumn(array, '6', 0));

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};
