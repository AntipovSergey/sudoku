const {
  isSolvedBlocks,
  isSolvedEmptyCells,
} = require('./is-solved-blocks-empty.js');

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

// const fs = require('fs');

// const sudoku = fs.readFileSync('./sudoku-puzzles.txt', 'utf8')
// console.log(sudoku);

const sud1 = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89---';
function solve(boardString) {
  const board = [];
  // console.log('--------', board);
  for (let i = 0; i < 81; i += 9) {
    board.push(boardString.slice(i, i + 9).split(''));
  }
  return board;
}
// console.table(solve(sud1));

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.

function isSolved(board) {
  const result = [];
  result.push(isSolvedBlocks(board), isSolvedEmptyCells(board));
  return !result.includes(false);
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  const rows = new Array(9).fill('');
  const table = rows.map((row) => row = new Array(9).fill(''));
  // console.table(table);
  // console.log(rows);
}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
