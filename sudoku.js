// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

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
  const mainSudokuBoard = document.getElementById('mainSudokuBoard');
  for (let i = 0; i < 81; i++) {
    const divBoard = mainSudokuBoard.appendChild(document.createElement('div'));
    divBoard.style.backgroundColor = parseInt((i / 9) + i) % 2 === 0 ? '#ababab' : 'white';
    divChess.innerText = board[i];
  }

}


module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
