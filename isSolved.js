function isSolved(board) {

  if (typeof board !== 'string') return false;

  let sum = 0;

  for ( let i = 0; i<board.length; i++ ){
    if (typeof parseInt(board[i]) !== 'number' || parseInt(board[i]) === 0) return false;
      else sum += Number(board[i]);
  }

  return sum === 405;
}

module.exports = isSolved;
