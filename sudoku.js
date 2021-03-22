// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
const line = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

// 1-5 8-2 ---
// -9- -76 4-5
// 2-- 4-- 819
// -19 --7 3-6
// 762 -83 -9-
// --- -61 -5-
// --7 6-- -3-
// 43- -2- 5-1
// 6-- 3-8 9--

function solve(boardString) {
  const table = [];
  const splittedLine = line.split('');
  for (let i = 0; i < 9; i++) {
    const array = [];
    for (let j = 0; j < 9; j++) {
      array.push(splittedLine.shift());
    }
    table.push(array);
    // console.log(splittedLine)
  }

  console.log(table);
}

solve(line);

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
