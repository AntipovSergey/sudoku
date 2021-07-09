// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function findEmptyCell(board) {
  let emptyCellLocation = [];
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === 0) {
        emptyCellLocation.push(row,col);
        break;
      }
    }
    if (emptyCellLocation.length) break;
  }
  if (emptyCellLocation.length) return emptyCellLocation
  else {
    emptyCellLocation = null;
    return emptyCellLocation;
  }
}

function selectNumber(board) {
  let emptyCellCoords = findEmptyCell(board);
  for (let i = 1; i < 10; i++) {
    if (isSolved(i, emptyCellCoords, board)) {
      board[emptyCellCoords[0]][emptyCellCoords[1]] = i;
    }
  }
  return board;
}

let testBoard = [
  [1,0,5,8,9,2,9,9,9],
  [9,9,9,9,7,6,4,9,5],
  [2,9,9,4,9,9,8,1,9],
  [9,1,9,9,9,7,3,9,6],
  [7,6,2,9,8,3,9,9,9],
  [9,9,9,9,6,1,9,5,9],
  [9,9,7,6,9,9,9,3,9],
  [4,3,9,9,2,9,5,9,1],
  [6,9,9,3,9,8,9,9,9]
];

// console.log(findEmptyCell(testBoard));
console.log(selectNumber(testBoard))
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
// module.exports = {
// 	solve: solve,
// 	isSolved: isSolved,
// 	prettyBoard: prettyBoard
// }
