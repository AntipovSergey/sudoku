
function solve(boardString) {
console.log('first changes');

}

function isSolved(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        return false;
      }
    }
  }

  return true;
}

function prettyBoard(board) {
  return board.join('\n').split(',').join(' ');
}

module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

