// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

const arr = [
  ['-', '1', '-'],
  ['2', '-', '1'],
  ['3', '-', '2']];
console.log(arr);



function solve(boardString) {
  
}

function search(board, emptyPoints, emptyPointIndex) {
 


}

function findEmpty(board) {
  const emptySpaces = [];
  for (let row = 0; row < board.length; row++) {
   for (let column = 0; column < board[row].length; column++) {
     if (board[row][column] === '-') {
       emptySpaces.push([row, column])
     } 
   }
 }
 return emptySpaces
}



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
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}
