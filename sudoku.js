// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

}
const checkVertical = (board, y, x) => {
  let allvariants = ['1','2','3','4','5','6','7','8','9'];
  let news = [];
  for(let i = 0; i < board.length; i += 1){
    // allvariants = allvariants.filter(el => el !== board[i][x]);
    if (board[i][x].push(news)) {
      return false;
    }
  }
  return true;
  // return allvariants;
} 

console.log(checkVertical(board, 0,2))

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
