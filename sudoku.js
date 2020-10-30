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
  for (let i = 0; i < board.length; i ++) {
    board[i].join()
  }
  board = (board.join('')).replace(/,/g, '');

  const strings = [];

  for (let r = 0; r <= 80; r += 9) {
    strings.push(board.substring(r, (r + 9)));
  }
  for (let c = 0; c <= 8; c += 1) {
    strings.push(`${board[c]}${board[c + 9]}${board[c + 18]}${board[c + 27]}${board[c + 36]}${board[c + 45]}${board[c + 54]}${board[c + 63]}${board[c + 72]}`)
  }
  for (let bc = 0; bc <= 6; bc += 3) {
    for (let b = bc; b <= 80; b += 27) {
      strings.push(`${board[b]}${board[b + 1]}${board[b + 2]}${board[b + 9]}${board[b + 10]}${board[b + 11]}${board[b + 18]}${board[b + 19]}${board[b + 20]}`)
    }
  }
  return strings.every((string) => (string.search(/(?!.*([1-9]).*\1)^[1-9]{1,9}$/)) !== -1)
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
