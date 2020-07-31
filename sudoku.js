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
function prettyBoard(board) {
  let string = board;
  let result = [];
  for (let index = 0; index < 9; index++) {
    result.push(Array.from(string.substring(0, 9)));
    string = string.substring(9);
  }
  for (let index = 0; index < result.length; index++) {
    const element = result[index];
    for (let jindex = 0; jindex < element.length; jindex++) {
      const cell = element[jindex];
      if (cell === '-') {
        element[jindex] = 0;
      } else {
        element[jindex] = +element[jindex];
      }
    }
  }
  return result;
}

// Exports all the functions to use them in another file.
// module.exports = {
//   solve: solve,
//   isSolved: isSolved,
//   prettyBoard: prettyBoard,
// };

function lineSearchForOneEmpty(board) {
  for (let index = 0; index < board.length; index++) {
    const line = board[index];
    const difference = 45 - board[index].reduce((a, c) => a + c, 0);
    if (!board[index].includes(difference)) {
      for (let j = 0; j < line.length; j++) {
        if (line[j] === 0) {
          line[j] = difference;
        }
      }
    }
  }
  return board;
}

// console.log(
//   prettyBoard(
//     '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
//   )
// );

function columnSearchForOneEmpty(board, number) {}
