function prettyBoard(board) {
  let str = '';
  for (let i = 0; i < board.length; i += 1) {
    str += `${board[i].join(' ')}\n`;
  }
  return str;
}
