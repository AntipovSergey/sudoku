function prettyBoard(board) {
  let newBoard = '';
  for (let i = 0; i < board.length; i++) {
    newBoard += `${board[i].join(' ')}\n`;
  }

  return newBoard.trim();
}

module.exports = {
  prettyBoard,
};
