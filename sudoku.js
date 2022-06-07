
function prettyBoard(board) {
	return board.map((el) => el.join(' ')).join(' \n');

function isSolved(board) {
  let board2 = board.flat(Infinity)
  for (let i = 0; i < board2.length; i++) {
    if (board[i] === '-') {
      return false
    }
  }
  return true

}
