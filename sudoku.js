let boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

function getArrayToString(puzzle) {
  const board = []
  for (let i = 0; i < 81; i += 9) {
    board.push(puzzle.split('').slice(i, i + 9))
  }
  return board
}
console.table(getArrayToString(boardString))


const value = getArrayToString(boardString);


function isValid(board, row, col, k) {
  for (let i = 0; i < 9; i += 1) {
    if (board[row][i] === k || board[i][col] === k) {
      return false
    }   
  }
  return true
}
console.log(isValid(value))

function solve(boardString) {
  console.log('first changes');
}








function isSolved(board) {

}

function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
